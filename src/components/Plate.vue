<template>
  <div>
    plate~! plaId : {{pageOption.plaId}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageOption: {
        plaId: 0
      }
    }
  },
  created() {
    this.pageOption.plaId = this.$route.params.plaId;
  },
}
</script>

<style>

</style>