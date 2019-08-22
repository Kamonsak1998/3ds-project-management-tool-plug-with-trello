<template>
  <div class="container">
    <boardtotal></boardtotal>
    <allboard></allboard>
  </div>
</template>

<script>
import boardtotal from "@/components/leaderBoard/boardtotal.vue";
// import allboard from "@/components/leaderBoard/allboard.vue";
import { mapGetters } from "vuex";
export default {
  mounted: function() {
    if (this.idBoard != "") {
      return;
    } else {
      this.$router.push("/dashboards");
      return;
    }
  },
  computed: {
    ...mapGetters(["idBoard"])
  },
  components: {
    boardtotal,
    // allboard
  }
};
</script>

<style>
</style>
