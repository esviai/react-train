export const handleForm = () => {
  return {
    type: 'HANDLE_FORM'
  }
}

export const handleName = (name) => {
  return {
    type: 'HANDLE_NAME',
    payload: name
  }
}

export const handleLoc = (loc) => {
  return {
    type: 'HANDLE_LOC',
    payload: loc
  }
}
