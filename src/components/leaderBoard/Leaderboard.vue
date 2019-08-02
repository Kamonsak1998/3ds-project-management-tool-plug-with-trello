<template>
  <b-container class="bv-example-row mt-5">
    <div class="col-lg-10 mx-auto">
      <div class="card-body shadow-sm p-0 mb-5 bg-white rounded">
        <table class="table table-outlined table-striped table-hover">
          <thead>
            <tr>
              <th>No.</th>
              <th>Rank</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr class="trcell" v-for="item in items" :key="item">
              <td>1</td>
              <td>{{item.Rank}}</td>
              <td>{{item.Name}}</td>
              <td>{{item.Score}}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <b-table
        class="b-table shadow-sm p-3 mb-5 bg-white rounded"
        striped
        hover
        Bordered
        shadown
        outlined
        :items="items"
      >
        <div>
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
      </b-table>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { Rank: "1", Name: "BahBenz", Score: "100" },
        { Rank: "2", Name: "arram", Score: "200" },
        { Rank: "3", Name: "gono", Score: "300" },
        { Rank: "4", Name: "arnon", Score: "400" }
      ]
    };
  }
};
</script>

<style>
.tableheader {
  font-size: 17px;
}
.hight {
  min-height: 4rem;
  margin-top: 50px;

  font-size: 20px;
}
.card-body {
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 0rem;
}
.striped {
  background-color: #c8ced3;
}
.b-table {
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 10rem;
}
.tr td :hover {
  background-color: black;
}
</style>