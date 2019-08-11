<template>
  <div>
    <b-card-group rows class="card-rows">
      <b-card class="shadow p-3 mb-5 bg-white rounded">
        <Bar />
      </b-card>
    </b-card-group>
    <b-card-group columns class="card-columns cols-2">
      <b-card class="shadow p-3 bg-white rounded">
        <BarColumn />
      </b-card>
      <b-card class="shadow p-3 bg-white rounded">
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

