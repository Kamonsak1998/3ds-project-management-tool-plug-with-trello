<template>
  <div class="leaderboard">
    <!-- <boardtotal></boardtotal> -->
    <allboard></allboard>
  </div>
</template>

<script>
// import boardtotal from "@/components/leaderBoard/boardtotal.vue";
import allboard from "@/components/leaderBoard/allboard.vue";
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
    // boardtotal,
    allboard,
  }
};
</script>

<style>
/* .container {
    width: 100%;
    padding-right: 0;
    padding-left: 0;
    margin-right: 0;
    margin-left: auto;
} */
.main .container-fluid {
    padding: 0 0px;
}
</style>
