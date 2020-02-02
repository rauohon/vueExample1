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
import axios from 'axios'

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

      axios.get('http://localhost:3000/health')
        .then(response => {
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