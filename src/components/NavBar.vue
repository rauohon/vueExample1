<template>
  <div>
    <ul>
      <li>
        <router-link to="/">home</router-link>
      </li>
      <li>
        <a href="" v-if="isAuth" @click="logout">logout</a>
        <router-link v-else to="/login">login, {{isAuth}}</router-link>
      </li>
      <li>
        <router-link to="/plate">plate</router-link>
      </li>
      <li v-if="!isAuth" >
        <router-link to="/signUp">signUp</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'isAuth'
    ])
  },
  methods: {
    ...mapMutations([
      'LOGOUT'
    ]),
    logout() {
      this.LOGOUT();
      this.$router.push('/');
    }
  },
}
</script>

<style>

</style>