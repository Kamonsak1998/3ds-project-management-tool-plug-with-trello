<template>
  <div class="container-allboard">
    <div class="table-allboard  ">
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
      
        <tbody class="tbody">
          <tr class="row-allboard shadow" v-for="(item,key) in items" :key="item">
            <td class="col-allboard ">{{key+1}}</td>
            <td class="col-allboard">
              <b>{{item.Name}}</b>
            </td>
            <td class="col-allboard">{{item.Score}}</td>
          </tr>
        </tbody>
      </table>
    </div>

     <div  class="col-sm-6" v-for="(item,key) in items" :key="item" >
        <div class="row1000">{{item.Score}}</div>
     </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      key:1,
      items: [
        { Name: "BahBenz", Score: "100" },
        { Name: "arram", Score: "200" },
        { Name: "gono", Score: "300" },
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

/* tr.row-allboard{
  color: white;
  text-shadow: 2px 2px 4px #000000;
  padding-top: 70px;
  padding-bottom: 20px;
} */
td.col-allboard  {
  
  color:blue;
  background: transparent;
   border: 20%;
}

.col-allboard {
  padding-bottom: 15px;
  background-color: transparent;
  border: 10px solid;
  text-align: center;
  border-color : transparent;
}

</style>
