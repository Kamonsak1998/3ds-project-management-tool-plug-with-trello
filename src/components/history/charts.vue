<template>
  <div class="animated fadeIn ">
    <b-card class="shadow p-3 mb-5 bg-white rounded">
      <Bar  />
    </b-card>
    <b-card-group columns class="card-columns">
      <b-card class="shadow p-3 mb-5 bg-white rounded">
        <BarColumn />
      </b-card>
    </b-card-group>
  </div>
</template>


<script>
import Bar from "@/components/history/Bar.vue";
import BarColumn from "@/components/history/BarColumn.vue";
export default {
  components: {
    Bar,
    BarColumn
  }
};
</script>
