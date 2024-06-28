import { createSlice } from "@reduxjs/toolkit";
import APIWrapper from "../../../shared/services/apiWrapper/apiwrapper";

const initialState = {
  skillsOptions:[],
  dashBoardCandidates: {
    candidateDetails: [],
    totalCount: 0,
  },
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: initialState,
  reducers: {
    setSkills: (state, action) => {
      state.skillsOptions = action.payload;
    },
    setCandidates: (state, action) => {
      state.dashBoardCandidates.candidateDetails = action.payload.candidateDetails;
      state.dashBoardCandidates.totalCount = action.payload.totalCount;
    },
  }
});

export const {
  setSkills,
  setCandidates,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;

export const GetTechSkills = ({
  onSuccess = () => {},
  onError = () => {},
} = {}) => async(dispatch) => {
  const apiWrapper = new APIWrapper(dispatch);

  const skills = await apiWrapper.getTechSkills({
    onSuccess,
    onError,
  });

  dispatch(setSkills(skills));
};

export const GetCandidateDetails = ({
  data,
  onSuccess = () => {},
  onError = () => {},
} = {}) => async(dispatch) => {
  const apiWrapper = new APIWrapper(dispatch);
  const candidatesResponse = await apiWrapper.getCandidateDetails({
    data,
    onSuccess,
    onError,
  });

  dispatch(setCandidates(candidatesResponse.data));
};

export const ShareAssessmentLink = ({
  candidateID,
  onSuccess = () => {},
  onError = () => {},
} = {}) => async(dispatch) => {
  const apiWrapper = new APIWrapper(dispatch);

  await apiWrapper.shareAssessmentLink({
    candidateID,
    onSuccess,
    onError,
  });
};

export const AddCandidate = ({
  data,
  onSuccess = () => {},
  onError = () => {},
} = {}) => async(dispatch) => {
  const apiWrapper = new APIWrapper(dispatch);

  await apiWrapper.addCandidate({
    data,
    onSuccess,
    onError,
  });
};

export const EditCandidate = ({
  data,
  onSuccess = () => {},
  onError = () => {},
} = {}) => async(dispatch) => {
  const apiWrapper = new APIWrapper(dispatch);

  await apiWrapper.editCandidate({
    data,
    onSuccess,
    onError,
  });
};

export const GetFileDownload = ({
  onSuccess = () => {},
  onError = () => {},
}) => async(dispatch) => {
  const apiWrapper = new APIWrapper(dispatch);

  await apiWrapper.getFileDownload({
    onSuccess,
    onError,
  });
};

export const PostUploadFile = ({
  file,
  onSuccess = () => {},
  onError = () => {},
}) => async(dispatch) => {
  const apiWrapper = new APIWrapper(dispatch);

  await apiWrapper.postUploadFile({
    file,
    onSuccess,
    onError,
  });
};

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

export const DownloadCandidateReport = ({
  candidateId,
  onSuccess = () => {},
  onError = () => {},
} = {}) => async(dispatch) => {
  const apiWrapper = new APIWrapper(dispatch);

  await apiWrapper.downloadCandidateReport({
    candidateId,
    onSuccess,
    onError,
  });
};
