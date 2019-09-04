<template>
  <div class="container">
    <allboard></allboard>
  </div>
</template>

<script>
import allboard from "@/components/leaderBoard/allboard.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    allboard,
  }
};
</script>

<style>
.main .container-fluid {
    padding: 0 0px;
}
</style>
