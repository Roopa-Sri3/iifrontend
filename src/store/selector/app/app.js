export const IsUserLoggedIn = (state) => state.app.isUserLoggedIn;

export const GetUserName = (state) => state.app.userName;

export const GetProfileName = (state) => state.app.profileName;

export const IsModalOpen = (state, name) => state.app.modal.modalName === name;

export const GetModalData = (state) => state.app.modal.modalData;

export const GetAlertMessage = (state) => state.app.message;

export const GetAlertMessageType = (state) => state.app.messageType;

export const GetTimeoutId = (state) => state.app.timeoutId;

export const GetUserRole = (state) => state.app.role;

export const GetProfileShortcutName = (state) => {
   const profileName = state.app.profileName;
  if (profileName) {
    const names = profileName.split(" ");

    if (names.length >= 2) {
      return names[0][0] + names[1][0];
    }
    return "NO_PROFILE_NAME";
  }
  return "NO_PROFILE_NAME";
 };

