<template>
  <div class="animated fadeIn">
    <p>
      <label>
        <b>Select Theme</b>
      </label> &nbsp;
      <select @change="updateTheme">
        <option value="palette1">Theme 1</option>
        <option value="palette2">Theme 2</option>
        <option value="palette3">Theme 3</option>
        <option value="palette4">Theme 4</option>
        <option value="palette5">Theme 5</option>
        <option value="palette6">Theme 6</option>
        <option value="palette7">Theme 7</option>
        <option value="palette8">Theme 8</option>
        <option value="palette9">Theme 9</option>
        <option value="palette10">Theme 10</option>
      </select>
    </p>
    <apexchart width="100%" height="350" type="bar" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "BarTotal",
  props: {
    model: {
      required: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.series[0] = { ...this.series[0], ...{ data: this.model.ScoreTotal.data } };
      this.chartOptions = { ...this.chartOptions, ...{xaxis: {categories: this.model.ScoreTotal.name} } };
    }, 1500);
  },
  // mounted: function() {
  //   if (this.idBoard != "") {
  //     axios
  //       .post("http://localhost:9000/gethistory", {
  //         token: this.token,
  //         idBoard: this.idBoard
  //       })
  //       .then(res => {
  //         this.series[0] = {
  //           ...this.series[0],
  //           ...{
  //             data: res.data.ScoreTotal.data
  //           }
  //         };
  //         this.chartOptions = {
  //           ...this.chartOptions,
  //           ...{
  //             xaxis: {
  //               categories: res.data.ScoreTotal.name
  //             }
  //           }
  //         };
  //       });
  //   } else {
  //     this.$router.push("/dashboards");
  //   }
  // },
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
        },
        plotOptions: {
          bar: {
            distributed: true,
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
        }
      },
      series: [
        {
          name: "Total",
          data: []
        }
      ]
    };
  },
  methods: {
    updateTheme(e) {
      this.chartOptions = {
        theme: {
          palette: e.target.value
        }
      };
    }
  }
};
</script>
