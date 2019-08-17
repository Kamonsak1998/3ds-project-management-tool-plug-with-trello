<template>
  <div class="animated fadeIn">
    <b-card-group rows class="card-rows">
      <b-card class="shadow p-3 mb-5 bg-white rounded">
        <BarColumn />
      </b-card>
    </b-card-group>
    <b-card-group rows class="card-rows">
      <b-card class="shadow p-3 mb-5 bg-white rounded">
        <Bar />
      </b-card>
    </b-card-group>
  </div>
</template>


<script>
import Bar from "@/components/history/Bar.vue";
import BarColumn from "@/components/history/BarColumn.vue";
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
    Bar,
    BarColumn
  }
};
</script>

