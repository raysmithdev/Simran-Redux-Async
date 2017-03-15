export const addTodo = (text) => ({
  type: 'ADD_TODO',
  text
})


const requestData = () => ({
  type: 'REQUEST_DATA'
})

const recieveData = (data) => ({
  type: 'RECIEVE_DATA',
  data
})

export const fetchData = () => {
  return (dispatch) => {
    dispatch(requestData())

    fetch('https://randomuser.me/api/?results=5000')
    .then(response => response.json())
    .then(json => dispatch(recieveData(json.results)))
  }
}
