export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUsername = state => state.auth.user.name;
export const selectAuthStatus = (state) => state.auth.status;
export const selectAuthToken = (state) => state.auth.data;
// const authSelectors = {
//   getIsLoggedIn,
//   getUsername,
// };
// export default authSelectors;