<template>
  <div class="animated fadeIn">
    <b-card-group columns class="card-columns">
      <b-card header="Bar Chart">
        <Bar />
      </b-card>
      <b-card header="Bar Column">
        <BarColumn />
      </b-card>
    </b-card-group>
  </div>
</template>


<script>
import Bar from '@/components/history/Bar.vue'
import BarColumn from '@/components/history/BarColumn.vue'
export default {
  components: {
    Bar,
    BarColumn
  }
};
</script>
