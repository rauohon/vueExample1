<template>
  <div>
    signUp~
    <br>
    <input type="text" v-model="mbLoginId" placeholder="ID">
    <br>
    <input type="password" v-model="mbPassword" placeholder="PASSWORD">
    <br>
    <button @click="btnSignUp">회원가입</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      mbLoginId: '',
      mbPassword: ''
    }
  },
  methods: {
    btnSignUp() {
      console.log("btnLogin -> this.mbLoginId", this.mbLoginId);
      console.log("btnLogin -> this.mbPassword", this.mbPassword);
      const params = {
        mbLoginId: this.mbLoginId,
        mbPassword: this.mbPassword
      }

      axios.post('http://13.125.11.60:8082/signUp', params)
        .then(response => {
          console.log("btnSignUp -> response", response);
        })
        .catch(error => {
          console.log("btnSignUp -> error", error);
        })

    }
  }

}
</script>

<style>

</style>