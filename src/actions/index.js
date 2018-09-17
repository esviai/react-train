import Axios from 'axios'

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

export const tonaldSays = (name) => {
  return (dispatch) => {
    Axios.get(`https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=${name}`)
      .then ((response) => {
        dispatch({
          type: 'TONALD_SAYS',
          payload: response.data.message
        })
      })
      .catch((error) => {
        dispatch({
          type: 'TONALD_SAYS',
          payload: `You are such a terrible human being, even Tonald Drump doesn't want to have any business with you.`
        })
      })

  }
}
