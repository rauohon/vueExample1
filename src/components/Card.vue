<template>
  <div>
    <template v-if="pageOption.loading"> 조회중... </template>
    <template v-else>
      card~! : {{pageOption.cId}}
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageOption: {
        cId: 0,
        loading: false
      }
    }
  },
  watch: {
    '$route': {
      handler: 'fetchData',
      immediate: true
    }
  },
  created() {
    
  },
  methods: {
    fetchData() {
      this.pageOption.loading = true;
      setTimeout(() => {
        this.pageOption.cId = this.$route.params.cId;
        this.pageOption.loading = false
      }, 500);
    }
  },
  
}
</script>

<style>

</style>