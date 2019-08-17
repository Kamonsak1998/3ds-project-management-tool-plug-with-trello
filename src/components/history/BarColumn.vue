<template>
  <div class="chart-wrapper">
    <apexchart type="bar" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
  import axios from "axios";
  import { mapGetters } from "vuex";

  export default {
  mounted: function() {
    if (this.idBoard != "") {
      axios
              .post("http://localhost:9000/gethistory", {
                token: this.token,
                idBoard: this.idBoard
              })
              .then(res => {
                this.series[0] = {...this.series[0], ...{
                  data: res.data.ScoreTotal.data
                  }}
                this.chartOptions = {...this.chartOptions, ...{
                  xaxis: {
                    categories: res.data.ScoreTotal.name
                  }
                  }}
              });
    } else {
      this.$router.push("/dashboards");
    }
  },
    computed: {
      ...mapGetters(["idBoard", "token"])
    },
  data: function() {
    return {
      chartOptions: {
        chart: {
          id: "vuechart-example"
        },
        xaxis: {
          categories: []
        }
      },
      series: [
        {
          name: "Total",
          data: []
        }
      ]
    };
  }
};
</script>
