import axios from 'axios'
const githubFetching = () => ({
  type: 'GITHUB_FETCHING'
})
const githubError = () => ({
  type: 'GITHUB_ERROR'
})
const githubSuccess = payload => ({
  type: 'GITHUB_SUCCESS',
  payload: payload
})

const initialState = {
  fetching: false,
  data: []
}

export const getDataFromInstagramApi = () => ({
  type: [githubFetching, githubSuccess, githubError],
  payload: {
    data: () =>
      axios(
        `https://func-elia-instagram-api.azurewebsites.net/api/fetch-image?code=6-Y8A-zr4w0wOH7i20ukYdpkYt2p1MQAaHHRT6biM6VmAzFuqADKWg==`
      ).then(payload => {
        const response = payload.data
        return {
          ...response
        }
      })
  }
})

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GITHUB_FETCHING':
      return {
        ...state,
        fetching: true
      }
    case 'GITHUB_SUCCESS':
      return {
        ...state,
        fetching: false,
        data: action.payload.data
      }
    case 'GITHUB_ERROR':
      return {
        ...state,
        fetching: false
      }
    default:
      return state
  }
}
