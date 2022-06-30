export const reducer = (state, action) => {
  if (action.type === "logged_in") {
    return {
      ...state,
      isLoggedIn: true,
      authToken: `${action.authToken}`
    }
  } else {
    return state
  }
}

export const initialState = {
  isLoggedIn: false,
  authToken: ''
}
