const initialState = {
  data: [],
  loading: false
}

const api = (state = initialState, action) => {
  switch(action.type) {
    case 'REQUEST_DATA':
      return {
        ...state,
        loading: true
      }

    case 'RECIEVE_DATA':
      return {
        ...state,
        data: action.data,
        loading: false
      }

    default:
      return state
  }
}

export default api
