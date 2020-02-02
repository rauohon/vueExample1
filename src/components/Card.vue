<template>
  <div>
    card~! : {{pageOption.cId}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageOption: {
        cId: 0
      }
    }
  },
  watch: {
    '$route'() {
      this.pageOption.cId = this.$route.params.cId;
    }
  },
  created() {
    this.pageOption.cId = this.$route.params.cId;
  },
  
}
</script>

<style>

</style>