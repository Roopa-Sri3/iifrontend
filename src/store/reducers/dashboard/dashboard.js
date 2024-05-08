import { createSlice } from '@reduxjs/toolkit';
import APIWrapper from '../../../shared/services/apiWrapper/apiwrapper';

const initialState = {
  skillsOptions:[],
  candidateDetails:{}
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: initialState,
  reducers: {
    setSkills: (state, action) => {
      state.skillsOptions = action.payload.skills;
    },
  }
});

export const {
  setSkills,
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
