<template>
  <div>
    home~
    <div v-if="pageOption.loading">로딩중</div>
    <div v-else>
      Api result: {{apiRes}}
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  data() {
    return {
      pageOption: {
        loading: false,
      },
      apiRes: '',
      error: '',
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.pageOption.loading = true;
      Vue.httpClient
        .get('/')
        .then(response => {
          console.log("fetchData -> response", response)
          this.apiRes = response.data;
        })
        .catch(error => {
          this.error = error;
        })
        .finally(() => {
          this.pageOption.loading = false;
        })
    }
  },

}
</script>

<style>

</style>