const initialState = {
  name: null,
  loc: null,
  isSubmitted: false,
  quote: null
}

export default (state=initialState, action) => {
  switch (action.type) {
    case 'HANDLE_FORM':
      return {
        ...state,
        isSubmitted: true
      }
    case 'HANDLE_NAME':
      return {
        ...state,
        name: action.payload
      }
    case 'HANDLE_LOC':
      return {
        ...state,
        loc: action.payload
      }
    case 'TONALD_SAYS':
      return {
        ...state,
        quote: action.payload
      }
    default:
      return state
  }
}
