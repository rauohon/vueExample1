'use strict'

import Vue from 'vue'
import AppConfig from '@/config/config'

export const setAuthInHeader = token => {
  Vue.httpClient.defaults.headers.common['x-auth-token'] = token ? token : null;
}

export const auth = {
  login(params) {
    return Vue.httpClient
      .post(`${AppConfig.HTTP_CONFIG.authURL}/login`, params)
      .then(response => response)
      .catch(error => {
        console.log("btnLogin -> error", error);
      });
  }
}