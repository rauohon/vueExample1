'use strict'

import HttpExecutorFactory from '@/plugin/http/httpExecutorFactory'
import Exception from '@/plugin/exception/exceptions'

const HttpModule = {
  install(Vue, options) {
    console.log(`[System] HttpModule install start`);

    const http = HttpExecutorFactory.create(options.HTTP_CONFIG);
    const responseCode = options.RESPONSE_CODE;

    // client action 확인
    http.interceptors.request.use(config => {
      // request 인터셉터
      // config에 따라 옵션 조절
      
      // 프로그레스 바 호출

      if (config.url != null
          && config.url.indexOf("/login") < 0
          && config.url.indexOf("/logout") < 0) {
        // 이벤트 버스 설정
      }

      return config;
    },
    error => {
      // 프로그레스 바 제거
      console.log("HttpModule install -> error", error);
    });

    http.interceptors.response.use(response => {
      // response 인터셉터
      // 프로그레스 바 제거

      const requestUrl = response.request.responseURL;
      const httpStatus = response.status;
      const data = response.data;
      let result = null;
      let isSuccess = true;

      if (!data) {
        isSuccess = false;
      }

      if (response.data) {
        result = response.data;

        if (result.status !== responseCode.SUCCESS
            && result.status !== responseCode.DUP_PK ) {
          isSuccess = false;
        }
      }

      if (response.request.responseType === 'arraybuffer') {
        isSuccess = true;
      }

      if (isSuccess === false) {
        return Promise.reject(
          // Exception 설정
          new Exception.ApiResonseError(
            '[HTTP] Response Data is empty.',
            requestUrl,
            httpStatus,
            result
          )
        )
      }

      return response;
    },
    error => {
      // 프로그레스 바 제거
      if (error.response) {
        if (error.response.status === 500) { // 서버 에러
          const RDS = error.response.data.status;

          if (RDS == responseCode.NOT_LOGIN) {
            // 로그인 오류
          } else if (error.response.data.status == responseCode.UNAUTHORIZATION) {
            // 권한 오류
          } else if (error.response.data.status == responseCode.NOT_VALID_AGUMENT) {
            // api validation 오류  
          } else if (error.response.data.status == responseCode.FILE_UPLOAD_FAIL) {   
            // 파일 업로드 실패  
          } else if (error.response.data.status == responseCode.FILE_DOWNLOAD_FAIL) {   
            // 파일 다운로드 실패 
          } else {
            window.$Alert.alert('실행 중 오류가 발생하였습니다.<br/>잠시 후 다시 실행 해 주십시오.');
          }

        }
      } else {
        // null, undefined 에러
      }

      return Promise.reject(error.response);
    })

    window.$http = http;
    Vue.httpClient = http;
    Vue.prototype.$http = http;
    
    console.log(`[System] HttpModule install end`);
    
  }
}

export default HttpModule