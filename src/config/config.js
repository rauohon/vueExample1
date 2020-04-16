'use strict'

export default {

  // API 
  HTTP_CONFIG: {
    authURL: 'http://13.125.11.60:8082',
    baseURL: 'http://localhost:8081',
    timeout: 10000,
    crossDomain: true,
    withCredentials: false,
    debug: true
  },

  // API RESPONSE CODE
  RESPONSE_CODE: {
    SUCCESS: '200',
    DUP_PK: '601',
    NOT_VALID_ARGUMENT: '701',
    NOT_LOGIN: '801',
    LOGIN_FAIL: '802',
    UNAUTHORIZATION: '803',
    ACCOUNT_LOCKOUT: '804',
    FILE_UPLOAD_FAIL: '901',
    FILE_DOWNLOAD_FAIL: '902',
    ERROR: '999'
  }


}