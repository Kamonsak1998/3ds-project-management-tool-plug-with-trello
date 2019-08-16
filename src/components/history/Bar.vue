<template>
  <div class="chart-wrapper">
    <apexchart height="350px" type="bar" :options="chartOptions" :series="series"></apexchart>
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
          boardid: this.idBoard
        })
        .then(res => {
          this.series = res.data.scoreOfSprint;
          console.log(res);
          
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
      series: [],
      chartOptions: {
        plotOptions: {
          chart: {
            id: "basic-bar"
          },
          bar: {
            horizontal: true,
            dataLabels: {
              position: "top"
            }
          }
        },
        subtitle: {
          text: "Total",
          align: "left",
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: "16px",
            color: "#000000"
          }
        },
        xaxis: {
          categories : []
        }
      }
    };
  }
};
</script>
