import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: 'http://www.tencen.com', // api的base_url
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(config => {
  // if (store.getters.token) {
  //   config.headers['Authorization'] = 'Bearer ' + getToken()
  // config.headers['X-Token'] = getToken() // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
  // }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    if (response.status !== 200) {
      console.log('back end response error.', res)
    } else {
      return response
    }
  },

  error => {
    console.log('err' + error)// for debug

    return Promise.reject(error)
  })

export default service
