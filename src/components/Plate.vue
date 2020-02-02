<template>
  <div>
    plate~! plaId : {{pageOption.plaId}}
    <div>
    <router-link :to="'/plate/${pageOption.plaId}/c/1'">1</router-link>
    </div>
    <div>
    <router-link :to="'/plate/${pageOption.plaId}/c/2'">2</router-link>
    </div>
    <hr />
    <router-view></router-view>
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