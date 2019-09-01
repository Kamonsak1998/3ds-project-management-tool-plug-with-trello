<template>
  <div class="animated fadeIn">
    <apexchart height="370" type="line" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
export default {
  name: "burndownChart",
   mounted: function() {
     this.series[0] = {...this.series[2],...{data:this.model.dataIDealBurn[2].iDealBurn}}
     this.chartOptions = {...this.chartOptions, ...{subtitle:{text:this.model.dataIDealBurn[2].titleSprint}}};
     this.chartOptions = {...this.chartOptions, ...{xaxis: {categories: this.model.dataDay[2].datePeriod}}};
  },
   props: {
      model: {
          required: true,
      },
  },
  data: function() {
    return {
      series: [
        {
          name: "Ideal Burn",
          color: "rgba(255,0,0,0.25)",
          lineWidth: 2,
          data: []
        },
        {
          name: "Actual Burn",
          color: "rgba(0,120,200,0.75)",
          marker: {
            radius: 6
          },
          data: []
        }
      ],
      chartOptions: {
        plotOptions: {
          line: {
            lineWidth: 3
          },
          tooltip: {
            hideDelay: 200
          }
        },
        subtitle: {
          text: "sprint",
          x: -20
        },
        xaxis: {
          categories: []
        },
        yaxis: {
          title: {
            text: "Score"
          },
          plotLines: [
            {
              value: 0,
              width: 1
            }
          ]
        },
        xaxis: {
          title: {
            text: "Day"
          },
          plotLines: [
            {
              value: 0,
              width: 1
            }
          ]
        },
        legend: {
          layout: "vertical",
          align: "right",
          verticalAlign: "middle",
          borderWidth: 0
        }
      }
    };
  }
};
</script>
