<template>
  <div>
    plate~! plaId : {{pageOption.plaId}}
    <template v-if="pageOption.loading"> 조회중... </template>
    <template v-else>
      <div>
      <router-link :to="`/plate/${pageOption.plaId}/c/1`">1</router-link>
      </div>
      <div>
      <router-link :to="`/plate/${pageOption.plaId}/c/2`">2</router-link>
      </div>
      <hr />
      <router-view></router-view>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageOption: {
        plaId: 0,
        loading: false
      }
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.pageOption.loading = true;
      setTimeout(() => {
        this.pageOption.loading = false
        this.pageOption.plaId = this.$route.params.plaId;
      }, 500);
    }
  }
}
</script>

<style>

</style>