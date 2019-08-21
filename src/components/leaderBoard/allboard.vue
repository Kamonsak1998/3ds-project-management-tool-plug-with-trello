<template>
  <div class="container-allboard">
    <!-- <div class="table-allboard">
      <table class="ver6">
        <tr class="head-allboard">
          <th>
            <b>Rank</b>
          </th>
          <th>
            <b>Name</b>
          </th>
          <th>
            <b>Score</b>
          </th>
        </tr>
        <tbody>
          <tr class="allboard-row" v-for="(item,key) in items" :key="item">
            <td class="col-allboard">{{key+1}}</td>
            <td class="col-allboard">
              <b>{{item.Name}}</b>
            </td>
            <td class="col-allboard">{{item.Score}}</td>
          </tr>
        </tbody>
      </table>
    </div>-->

    <div class="allboard-row">
      <div class="row-head">
        <div class="row">
          <div class="col col-head">
            <b>Rank</b>
          </div>
          <div class="col col-head">
            <b>Name</b>
          </div>
          <div class="col col-head">
            <b>Score</b>
          </div>
        </div>
      </div>
      <div class="row allboard-body" v-for="(item,key) in items" :key="item">
        <div class="col">{{key+1}}</div>
        <div class="col">
          <b>{{item.Name}}</b>
        </div>
        <div class="col">{{item.Score}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      key: 1,
      items: [
        { Name: "BahBenz", Score: "100" },
        { Name: "arram", Score: "200" },
        { Name: "gono", Score: "300" }
        // { Name: "gono", Score: "300" },
        // { Name: "gono", Score: "300" },
        // { Name: "gono", Score: "300" },
        // { Name: "gono", Score: "300" },
        // { Name: "gono", Score: "300" },
        // { Name: "gono", Score: "300" },
        // { Name: "arnon", Score: "400" }
      ]
    };
  },
  methods: {}
};
</script>

<style>
.allboard-row .row + .row {
  margin-top: 8px;
  /* box-shadow: 7px; */
}
.row {
  /* box-shadow: 1px 10px 50px rgb(160, 160, 160); */
}
.allboard-body {
  padding-top: 20px;
  height: 60px;
  color: white;
  background: linear-gradient(40deg, #2096ff, #05ffa3) !important;
  box-shadow: 0px 3px 20px rgb(160, 160, 160);
  font-size: 20px;
  
}
div.allboard-row {
  text-align: center;
  margin: auto;
  /* width: 80%; */
}
.col-head {
  padding-top: 20px;
  height: 60px;
  color: black;
  background: transparent;
  font-size: 20px;
}
div.row.allboard-body {
  margin-top: 8px;
}
.container-allboard{
  
}
</style>
