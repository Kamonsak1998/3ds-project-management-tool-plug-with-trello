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
    </div> -->

    <div class="allboard-row container">
      <div class="row-head shadow" >
        <div class="row">
        <div class="col -text-center">
          <b>Rank</b>
        </div>
        <div class="col -text-center">
          <b>Name</b>
        </div>
        <div class="col -text-center">
          <b>Score</b>
        </div>
        </div>
      </div>
      <br>
      <div class="row text-center shadow-lg" v-for="(item,key) in items" :key="item">
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
  margin-top: 10px;
  box-shadow: 7px;
}
.row {
  /* box-shadow: 1px 10px 50px rgb(160, 160, 160); */
}
.col-text-center{
  padding-top: 20px;
  width: 296px;
  height: 60px;
  color: white;
  background: blue;
  max-width: 100%;
}
.col{
  padding-top: 20px;
  width: 20%;
  height: 60px;
  color: white;
  background: red;
  max-width: 100%;
}
div.allboard-row.container {
  text-align: center;
  margin: auto;
  width: 80%;
}


</style>
