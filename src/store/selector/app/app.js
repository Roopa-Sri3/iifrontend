export const IsUserLoggedIn = (state) => state.app.isUserLoggedIn;

export const GetUserName = (state) => state.app.userName;

export const IsModalOpen = (state, name) => state.app.modal.modalName === name;

export const GetAlertMessage = (state) => state.app.message;

export const GetAlertMessageType = (state) => state.app.messageType;

export const GetTimeoutId = (state) => state.app.timeoutId;

export const GetUserRole = (state) => state.app.role;
