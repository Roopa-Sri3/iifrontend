export const IsUserLoggedIn = (state) => state.app.isUserLoggedIn;

export const IsUserLoading = (state) => state.app.isUserLoading;

export const GetUserName = (state) => state.app.userName;

export const GetToken = (state) => state.app.token;

export const IsModalOpen = (state, name) => state.app.modal.modalName === name;

export const GetModalData = (state) => state.app.modal.modalData;

export const GetAlertMessage = (state) => state.app.message;

export const GetAlertMessageType = (state) => state.app.messageType;

export const GetTimeoutId = (state) => state.app.timeoutId;

export const GetUserRole = (state) => state.app.role;

export const GetProfileShortcutName = (state) => {
  const firstName = state.app.firstName || "";
  const lastName = state.app.lastName || "";
  return firstName[0].toUpperCase() + lastName[0].toUpperCase() || "UU"; // TODO: IF NO NAME??
};
