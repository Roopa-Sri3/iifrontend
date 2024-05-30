import { createSlice } from "@reduxjs/toolkit";
import APIWrapper from "../../../shared/services/apiWrapper/apiwrapper";

const initialState = {
  idProofStatus: null,
  candidateId: "",
  candidateName: "",
  phoneNumber: "",
  email:"",
  experience:"",
  primarySkill:"",
  secondarySkills:"",
  rrNo:"",
  linkExpired:false,
};

const candidateSlice = createSlice({
  name: "candidate",
  initialState: initialState,
  reducers: {
    setCandidateId: (state, action) => {
      const {candidateId} = action.payload;
      state.candidateId = candidateId;
    },
    setIdProofStatus: (state, action) => {
      state.idProofStatus = action.payload;
    },
    setCandidateDetails: (state, action) => {
      const {
        candidateName,
        phoneNumber,
        email,
        experience,
        primarySkill,
        secondarySkills,
        rrNo,
        linkExpired,
      } = action.payload;

      state.candidateName = candidateName;
      state.phoneNumber = phoneNumber;
      state.email = email;
      state.experience = experience;
      state.primarySkill = primarySkill;
      state.secondarySkills = secondarySkills;
      state.rrNo = rrNo;
      state.linkExpired = linkExpired;
    },
  }
});

export const {
  setCandidateId,
  setIdProofStatus,
  setCandidateDetails,
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

export const VerifyCandidateStatus = ({
  candidateId,
  onSuccess = () => {},
  onError = () => {},
} = {}) => async(dispatch) => {
  const apiWrapper = new APIWrapper(dispatch);

  await apiWrapper.verifyCandidateStatus({
    candidateId,
    onSuccess,
    onError,
  });
};
