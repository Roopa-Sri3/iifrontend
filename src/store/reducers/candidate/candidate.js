import { createSlice } from "@reduxjs/toolkit";
import APIWrapper from "../../../shared/services/apiWrapper/apiwrapper";

const initialState = {
  idProofStatus: null,
  candidateId: "",
  candidateName: "",
  phoneNumber: "",
  email:"",
  years:null,
  months:null,
  primarySkill:"",
  secondarySkills:[],
  rrNo:"",
  linkExpired:false,
  createdBy:"",
  skillsOptions: [],
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
    setHREmail : (state, action) => {
      state.createdBy = action.payload;
    },
    setCandidateDetails: (state, action) => {
      const {
        candidateName,
        phoneNumber,
        email,
        years,
        months,
        primarySkill,
        secondarySkills,
        rrNo,
        linkExpired,
        createdBy,
      } = action.payload;

      state.candidateName = candidateName;
      state.phoneNumber = phoneNumber;
      state.email = email;
      state.years = years;
      state.months = months;
      state.primarySkill = primarySkill;
      state.secondarySkills = secondarySkills;
      state.rrNo = rrNo;
      state.linkExpired = linkExpired;
      state.createdBy = createdBy;
    },
    setSkills: (state, action) => {
      state.skillsOptions = action.payload;
    },

  }
});

export const {
  setCandidateId,
  setIdProofStatus,
  setHREmail,
  setCandidateDetails,
  setSkills,
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

export const GetTechnicalSkillsForCandidate = ({
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
