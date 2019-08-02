<template>
  <b-container class="bv-example-row mt-5">
    <!-- <b-row align-v="center" class="hight">
      <b-col>Rank</b-col>
      <b-col cols="5">Name</b-col>
      <b-col>score</b-col>
    </b-row>
    <b-row v-for="item in item" :key="item">
      <b-col>1</b-col>
      <b-col>2</b-col>
      <b-col>3</b-col>
    </b-row> -->

    <b-row>
      <b-table col-lg-5 striped hover outlined :items="items"></b-table>
    </b-row>

    <div class="col-lg-10 mx-auto">
      <div class="card">
        <div class="card-header">
          <i class="fa fa-align-justify"></i> Sprint 1 
        </div>
        <div class="card-body">
          <table class="table table-responsive-sm table-striped">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              
            </tbody>
          </table>
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#">Prev</a>
            </li>
            <li class="page-item active">
              <a class="page-link" href="#">1</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">2</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">3</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">4</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">Next</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
        { age: 38, first_name: "Jami", last_name: "Carney" }
      ]
    };
  }
};
</script>

<style>
/* .table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
  text-align: center;
} */
.hight {
  min-height: 4rem;
  margin-top: 50px;

  font-size: 20px;
}
</style>