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
<<<<<<< Updated upstream

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
=======
  
    <div class="allboard-row container">
      <div class="row text-center"  v-for="(item,key) in items" :key="item"  >
        <div class="col">{{key+1}}</div>
        <div class="col"><b>{{item.Name}}</b></div>
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream

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


=======

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
.allboard-row .row + .row {
  margin-top: 1rem;
  box-shadow: 5px;
}
.row{
  box-shadow: 0px 10px 10px lightgrey;
}
.col {
  widows: 50%;
  height:60px;
  color: black;
  background: white;
  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  -ms-flex-positive: 1;
  flex-grow: 1;
  max-width: 100%;
  
}
/* .allboard-row {
  box-shadow: 0px 0px 40px lightgray;
} */
/* tr.allboard-row .row + .row {
  margin-top: 1rem;
  box-shadow: 5px;
} */
>>>>>>> Stashed changes
</style>
