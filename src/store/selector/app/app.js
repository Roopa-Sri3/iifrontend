export const IsUserLoggedIn = (state) => state.app.isUseLoggedIn;

export const GetUserName = (state) => state.app.userName;

export const IsModalOpen = (state, name) => state.app.modal.modalName === name;