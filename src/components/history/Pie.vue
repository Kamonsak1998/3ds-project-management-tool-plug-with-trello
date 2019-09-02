<template>
  <div class="animated fadeIn">
    <div>
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
      <apexchart type="pie" height="250" :options="chartOptions" :series="series"></apexchart>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pie",
  // props: {
  //     model: {
  //         required: true
  //     }
  // },
  mounted() {
    // this.series[0] = {...this.series[0], ...{data: this.model.data}};
    // this.chartOptions = {...this.chartOptions, ...{xaxis: {categories: this.model.name}}};
    // this.chartOptions = {...this.chartOptions, ...{subtitle: {text: this.model.startDate+ " - " +this.model.endDate}}};
    // this.chartOptions = {...this.chartOptions, ...{title: {text: this.model.title}}};
  },
  data: function() {
    return {
        series: [44, 55, 13, 43, 22],
        chartOptions: {
          pie: {
                horizontal: true,
                dataLabels: {
                    position: "top"
                }
            },
          labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
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
