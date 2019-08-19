<template>
  <div class="container">
    <div class="col-lg-9 mx-auto ">
      <div class="table100 ver6 m-b-110 shadow">
        <table data-vertable="ver6">
          <thead>
            <tr class="row100 head">
              <th><b>Rank</b></th>
              <th><b>Name</b></th>
              <th><b>Score</b></th>
            </tr>
          </thead>
          <tbody>
            <!-- <tr class="row100" v-for="(item,key) in items" :key="item">
              <td  class="column100 column1" data-column="column" >{{key+1}}</td>
              <td  class="column100 column" data-column="column"><b>{{item.Name}}</b></td>
              <td  class="column100 column" data-column="column">{{item.Score}}</td>
            </tr> -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
  }
};
</script>
                  
<style>

/*//////////////////////////////////////////////////////////////////


/* ------------------------------------ */

a:hover {
	text-decoration: none;
}
a {
	margin: 0px;
	transition: all 0.4s;
	-webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
}

a:focus {
	outline: none !important;
}

a:hover {
	text-decoration: none;
}

/* ------------------------------------ */




/*//////////////////////////////////////////////////////////////////
[ Table ]*/

  .limiter {
    width: 100%;
    margin: 0 auto;
  }

  .wrap-table100 {
    width: 1300px;
  }

/*//////////////////////////////////////////////////////////////////
[ Table ]*/
table {
  width: 100%;
  background-color: #fff;
  padding:50px;
}

th, td {
  font-weight: unset;
  padding-right: 10px;
}

.column100 {
  width: 130px;
  padding-left: 25px;
}


.row100.head th {
  padding-top: 24px;
  padding-bottom: 20px;
}

.row100 td {
  padding-top: 18px;
  padding-bottom: 14px;
}

/*******************table100******************* */

.table100.ver6 {
  border-radius: 16px;
  overflow: hidden;
  background: #7918f2;
  background: -webkit-linear-gradient(-68deg, #ec9696 , #fd0101);
  background: -o-linear-gradient(-68deg, #ec9696 , #fd0101);
  background: -moz-linear-gradient(-68deg, #ec9696 , #fd0101);
  background: linear-gradient(-68deg, #ec9696 , #fd0101);

}

.table100.ver6 table {
  background-color: transparent;
  padding-bottom: 50px;
}

.table100.ver6 td {
  
  font-size: 16px;
  color: #fff;
  line-height: 1.4;
}

.table100.ver6 th {
  
  font-size: 18px;
  color: #fff;
  line-height: 1.4;
  text-transform: uppercase;

  background-color: rgba(255,255,255,0.32);
}

.table100.ver6 .row100:hover td {
  background-color: rgba(255,255,255,0.1);
}

.table100.ver6 .hov-column1-ver6 {
  background-color: rgba(37, 70, 218, 0.1);
}


.table100.ver6 .row100 td:hover {
  background-color: rgba(255,255,255,0.2);
}
.m-b-110 {
    margin-bottom: 110px;
}

</style>