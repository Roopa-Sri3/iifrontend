export const IsUserLoggedIn = (state) => state.app.isUseLoggedIn;

export const GetUserName = (state) => state.app.userName;

// eslint-disable-next-line max-len
export const IsModalOpen = (state, modalName) => state.app.modal.modalName === modalName;

export const GetModalData = (state) => state.app.modal.modalData;

export const GetAlertMessage = (state) => state.app.message;

export const GetAlertMessageType = (state) => state.app.messageType;

export const GetTimeoutId = (state) => state.app.timeoutId;

