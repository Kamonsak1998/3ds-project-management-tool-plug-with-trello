<template>
  <div class="animated fadeIn">
    <apexchart height="370" type="line" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "burndownChart",
   mounted: function() {
     console.log('b',this.model.dataIDealBurn[2].iDealBurn);
    //  this.series = {...this.series,...{data:this.model.dataIDealBurn[2].iDealBurn}}
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
          data: [110, 100, 90, 80, 70, 60, 50, 40, 30, 25, 10, 20, 10, 0]
        },
        {
          name: "Actual Burn",
          color: "rgba(0,120,200,0.75)",
          marker: {
            radius: 6
          },
          data: [100, 110, 125, 95, 64, 76, 62, 44, 35, 29, 23, 20, 18, 2]
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
          text: "1",
          x: -20
        },
        xaxis: {
          categories: [
            "Day 1",
            "Day 2",
            "Day 3",
            "Day 4",
            "Day 5",
            "Day 6",
            "Day 7",
            "Day 8",
            "Day 9",
            "Day 10",
            "Day 11",
            "Day 12"
          ]
        },
        yaxis: {
          title: {
            text: "Hours"
          },
          plotLines: [
            {
              value: 0,
              width: 1
            }
          ]
        },
        tooltip: {
          valueSuffix: " hrs",
          crosshairs: true,
          shared: true
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
