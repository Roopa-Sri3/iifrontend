import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./presentation/layout/Layout";
import ROUTES_CONFIG from "./routes";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { IsUserLoggedIn } from "./store/selector/app";
import { PostToken, setIsUserLoading, setUserDetails } from "./store/reducers/app/app";

const router = createBrowserRouter(ROUTES_CONFIG);

function App() {
  const dispatch = useDispatch();

  const isStoreHasUserData = useSelector(IsUserLoggedIn);

  useEffect(() => {
    /**
     * If user refresh the page and if we have his tocken and id in local store
     * We can get the user details and updaet the store, because on refresh the store will reset.
     * So need to update the values.
     **/
    const localStoreToken = sessionStorage.getItem("Token");
    if (
      !isStoreHasUserData
      && localStoreToken
    ) {
      dispatch(
        PostToken({
          data: localStoreToken,
          onSuccess: (userDetails) => {
            const responseDetails = userDetails && userDetails.response;
            if (responseDetails) {
              dispatch(setUserDetails({
                ...responseDetails
              }));
            }
            else {
              dispatch(setIsUserLoading({
                isUserLoading: false,
              }));
            }
          }
        })
      );
    }
    else{
      dispatch(setIsUserLoading({
        isUserLoading: false,
      }));
    }
  }, [dispatch, isStoreHasUserData]);

  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );

}
export default App;
