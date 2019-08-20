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
          <th>x`x
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

    <div class="allboard-row container">
      <div class="row text-center" v-for="(item,key) in items" :key="item">
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
        { Name: "gono", Score: "300" },
        { Name: "gono", Score: "300" },
        { Name: "gono", Score: "300" },
        { Name: "gono", Score: "300" },
        { Name: "gono", Score: "300" },
        { Name: "gono", Score: "300" },
        { Name: "gono", Score: "300" },
        { Name: "arnon", Score: "400" }
      ]
    };
  },
  methods: {}
};
</script>

<style>
/* tr.row-allboard{
  color: white;
  text-shadow: 2px 2px 4px #000000;
  padding-top: 70px;
  padding-bottom: 20px;
} */
/* td.col-allboard {
  color: blue;
  background: transparent;
  border: 20%;
} */
/* 
.col-allboard {
  padding-bottom: 15px;
  background-color: transparent;
  border: 10px solid;
  text-align: center;
  border-color: transparent;
} */
/* 
.allboard-row .row + .row {
  margin-top: 10px;
  box-shadow: 7px;
}
.row {
  box-shadow: 0px 10px 10px lightgrey;
}
.col {
  width: 20%;
  height: 60px;
  color: black;
  background: white;
  max-width: 100%;
}
div.allboard-row.container {
  text-align: center;
  margin: auto;
  width: 80%;
} */
</style>
