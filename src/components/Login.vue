<template>
  <div>
    login~
    <br>
    <input type="text" v-model="mbLoginId" placeholder="ID">
    <br>
    <input type="password" v-model="mbPassword" placeholder="PASSWORD" @keyup.enter="btnLogin">
    <br>
    <button @click="btnLogin">로그인</button>
  </div>
</template>

<script>
// import Vue from 'vue'
// import AppConfig from '@/config/config'
// import {auth, setAuthInHeader} from '../api'
import {mapActions} from 'vuex'

export default {
  data() {
    return {
      mbLoginId: '',
      mbPassword: '',
      rPath: ''
    }
  },
  created() {
    this.rPath = this.$route.query.rPath || '/plate/1';
  },
  methods: {
    ...mapActions([
      'LOGIN'
    ]),
    btnLogin() {
      const params = {
        mbLoginId: this.mbLoginId,
        mbPassword: this.mbPassword
      }
      this.LOGIN(params)
        .then(() => {
          this.$router.push(this.rPath);
        })
    }
  },
}
</script>

<style>

</style>