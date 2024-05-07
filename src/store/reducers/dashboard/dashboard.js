import { createSlice } from '@reduxjs/toolkit';
import APIWrapper from '../../../shared/services/apiWrapper/apiwrapper';

const initialState = {
  skillsOptions:[]
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: initialState,
  reducers: {
    setSkills: (state, action) => {
      // debugger;
      state.skillsOptions = action.payload.skills;
    },
  }
});

export const {
  setSkills
} = dashboardSlice.actions;

export default dashboardSlice.reducer;

export const GetTechSkills = ({
  payload,
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
