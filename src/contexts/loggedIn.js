export const reducer = (state, action) => {
  if (action.type === "logged_in") {
    return {
      ...state,
      isLoggedIn: true,
    }
  } else {
    return state
  }
}

export const initialState = {
  isLoggedIn: false
}
