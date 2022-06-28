export const reducer = (state, action) => {
  if (action.type === "logged_in") {
    return {
      ...state,
      isLoggedIn: true,
      currentUser: action.user
    }
  } else {
    return state
  }
}

export const initialState = {
  isLoggedIn: false,
  currentUser: null
}
