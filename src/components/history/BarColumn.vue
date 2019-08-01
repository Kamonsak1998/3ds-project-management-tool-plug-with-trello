<template>
  <div class="chart-wrapper">
    <apexchart width="100%" height="350" type="bar" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      chartOptions: {
        chart: {
          id: "vuechart-example"
        },
        xaxis: {
          categories: ["Arm", "Beam", "Godji", "Ben", "Nino", "Non"]
        }
      },
      series: [
        {
          name: "Total",
          data: [30, 40, 35, 50, 49, 60, 70, 91]
        }
      ]
    };
  }
};
</script>
