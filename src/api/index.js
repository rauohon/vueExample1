import axios from 'axios'

const DOMAIN = 'http://localhost:3000'

const request = (method, url, params) => {
  // method : get or post
  // url : '/abc/cba'
  return axios ({
    method,
    url: DOMAIN + url,
    params
  })
  .then(result => result.data)
  .catch(result => {
    const {status} = result.response;
    if (status) return false;
  })

}

export default request;