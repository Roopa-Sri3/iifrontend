import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./presentation/layout/Layout";
import ROUTES_CONFIG from "./routes";
import { useDispatch, useSelector } from "react-redux";
import { IsUserLoggedIn } from "./store/selector/app";
import { getAssessmentId } from "./store/selector/screen";
import { setRefreshData, GetAssessmentRefreshData, setDuration, startExam,setAssessmentScreenLoading } from "./store/reducers/screen/screen";
import { PostToken, setIsUserLoading, setUserDetails } from "./store/reducers/app/app";
import "./App.css";

const router = createBrowserRouter(ROUTES_CONFIG);

function App() {
  const dispatch = useDispatch();
  const assessment_id = useSelector(getAssessmentId);
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

    const assessmentId = sessionStorage.getItem("assessmentId");
    const candidateId = sessionStorage.getItem("candidateId");

    if (!assessment_id && (assessmentId && candidateId)) {
      dispatch(GetAssessmentRefreshData({
        assessmentId,
        candidateId,
        onSuccess: (response) => {
          dispatch(setRefreshData(response));
          dispatch(startExam());
          const [minutes, seconds] = response.remainingTime.split(":").map(Number);
          const totalSeconds = minutes * 60 + seconds;
          dispatch(setDuration(totalSeconds));
        },
        onError: () => {},
      }));
    } else {
      dispatch(setAssessmentScreenLoading({
        isAssessmentscreenLoading: true,
      }));
    }

  }, [dispatch, assessment_id, isStoreHasUserData]);

  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );

}
export default App;
