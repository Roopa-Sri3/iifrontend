export const IsUserLoggedIn = (state) => state.app.isUserLoggedIn;

export const IsUserLoading = (state) => state.app.isUserLoading;

export const GetUserName = (state) => state.app.userName;

export const GetToken = (state) => state.app.token;

export const GetProfileName = (state) => state.app.firstName ? state.app.firstName + " " + state.app.lastName : state.app.lastName;

export const IsModalOpen = (state, name) => state.app.modal.modalName === name;

export const GetModalData = (state) => state.app.modal.modalData;

export const GetAlertMessage = (state) => state.app.message;

export const GetAlertMessageType = (state) => state.app.messageType;

export const GetTimeoutId = (state) => state.app.timeoutId;

export const GetUserRole = (state) => state.app.role;

export const GetUserDesignation = (state) => state.app.designation;

export const GetCandidateTillDate = (state) => state.app.candidateTillDate;

export const GetCandidateName = (state) => state.candidate.candidateName;

export const GetPhoneNumber = (state) => state.candidate.phoneNumber;

export const GetEmail = (state) => state.candidate.email;

export const GetExperience = (state) => state.candidate.experience;

export const GetPrimarySkill = (state) => state.candidate.primarySkill;

export const GetSecondarySkills = (state) => state.candidate.secondarySkills;

export const GetRrNo = (state) => state.candidate.rrNo;

export const GetProfileShortcutName = (state) => {
  const firstName = state.app.firstName || "";
  const lastName = state.app.lastName || "";
  return firstName[0].toUpperCase() + lastName[0].toUpperCase() || "UU"; // TODO: IF NO NAME??
};

export const IsApiFetching = (state) => state.app.apiCounter > 0;

