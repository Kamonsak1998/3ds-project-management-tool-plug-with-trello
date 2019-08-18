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
    <apexchart height="350" type="bar" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Bar",
  props: {
    model: {
      required: true
    }
  },
  created() {
    setTimeout(() => {
      this.series[0] = { ...this.series[0], ...{ data: this.model.scoreOfSprint[0].data } };
      this.chartOptions = { ...this.chartOptions, ...{ xaxis: { categories: this.model.ScoreTotal.name } } };
    }, 1500);
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
          text: "Sprint",
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
          categories: []
        }
      }
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
