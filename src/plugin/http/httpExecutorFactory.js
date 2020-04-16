'use strict'

import axios from 'axios'
import _ from 'lodash'

const DEFAULT_OPTIONS = {
  timeout: 30000,
  crossDomain: true,
  withCredentials: false,
  debug: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
    Expires: -1,
  }
}

const HttpExecutorFactory = () => {
  return {
    create: options => {
      let mergedOptions = _.merge(DEFAULT_OPTIONS, options);
      const http = axios.create(mergedOptions);
      
      if (mergedOptions.debug === true) {
        http.interceptors.request.use(config => {
          console.log( `[HTTP] Request :: ${config.url}` );
          return config;
        })

        http.interceptors.response.use(response => {
          console.log(
            `[HTTP] Response
              - status: ${response.status}
              - data:   ${response.data}
              - url:    ${response.request.responseURL}
            `
          );

          return response;
        })
      }

      return http;
    }
  }
}

export default HttpExecutorFactory()