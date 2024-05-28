import { createSlice } from "@reduxjs/toolkit";
import APIWrapper from "../../../shared/services/apiWrapper/apiwrapper";

const initialState = {
  idProofStatus: null,
};

const candidateSlice = createSlice({
  name: "candidate",
  initialState: initialState,
  reducers: {
    setIdProofStatus: (state, action) => {
      state.idProofStatus = action.payload;
    },
  }
});

export const {
  setIdProofStatus,
} = candidateSlice.actions;

export default candidateSlice.reducer;

export const PostIdProofDetails = ({
  file,
  candidateId,
  onSuccess = () => {},
  onError = () => {},
}) => async(dispatch) => {
  const apiWrapper = new APIWrapper(dispatch);

  await apiWrapper.postIdProofDetails({
    file,
    candidateId,
    onSuccess,
    onError,
  });
};
