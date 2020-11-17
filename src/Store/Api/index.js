import axios from './apiInstance'

const getRequestAsync = (uri) => {
  return axios.get(uri).catch((err) => {
    throw err
  }).then((response) => {
    if (response.status === 200 && response.data) {
      return response.data
    } else {
      let err = new Error('Something went wrong')
      throw err
    }
  })
}

// const postRequestAsync = (uri, body) => {
//   return axios.post(uri, body).catch((err) => {
//     throw err
//   }).then((response,) => {
//     if (response.status === 200 && response.data) {
//       return response.data
//     } else {
//       let err = new Error('Something went wrong')
//       throw err
//     }
//   })
// }

export {
  getRequestAsync,
  // postRequestAsync
}