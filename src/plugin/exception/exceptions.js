'use strict'

export default {
  ApiResponseError: class extends Error {
    constructor (message, url, httpStatus, result) {
      super(
        `${message}
          ...[url: ${url},
          httpStatus: ${httpStatus},
          result: ${result} ]`
      )

      this.name = this.constructor.name;
      this.result = result;
    }
  }
}