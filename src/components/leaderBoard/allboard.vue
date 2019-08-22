<template>
  <div class="container-allboard">
    <div class="allboard-row spinner" v-if="like===false">
      <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
    </div>

    <div class="allboard-row allboard" v-if="like===true">
      <div class="row row-head">   
          <div class="col col-head">
            <h5><b>Rank</b></h5>
          </div>
          <div class="col col-head">
             <h5><b>Name</b></h5>
          
          </div>
          <div class="col col-head">
             <h5><b>Score</b></h5>
           
          </div>
      </div>
      <div class="row allboard-body" v-for="(user,key) in users" :key="user">
        <div class="col number-rank"><h5>{{key+1}}</h5></div>
        <div class="col"><h5>{{user.name}}</h5></div>
        <div class="col point"><h5>{{user.point}}</h5></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      like: false,
      key: 1,
      users: [],
      user: { name: "", point: 0 },
      items: [
        { name: "BahBenz", point: "100" },
        { name: "arram", point: "200" },
        { name: "gono", point: "300" },
        { name: "gono", point: "300" },
        { name: "gono", point: "300" },
        { name: "gono", point: "300" },
        { name: "gono", point: "300" },
        { name: "gono", point: "300" },
        { name: "gono", point: "300" },
        { name: "arnon", point: "400" }
      ]
    };
  },
  mounted: function() {
    this.getUserData();
  },
  computed: {
    ...mapGetters(["idBoard", "token"])
  },
  methods: {
    getUserData() {
      axios
        .post("http://6052cfa0.ngrok.io/getleaderboard", {
          token: this.token,
          idBoard: this.idBoard
        })
        .then(response => {
          console.log(response);
          this.users = response.data.leaderboard;
          this.like = true;
        })
        .catch(err => {
          if ((err.message = "city not found")) {
            alert("city not found");
          }
        });
    }
  }
};
</script>

<style>
@media only screen and (max-width: 768px) {
  .allboard-body {
    padding-top: 8px;
    height: 50px;
    color: white;
    background: linear-gradient(40deg, #2096ff, #05ffa3) !important;
    -webkit-box-shadow: 0px 3px 20px rgb(160, 160, 160);
    box-shadow: 0px 3px 20px rgb(160, 160, 160);
    /* font-size: 20px; */
}
}
.allboard-row .row + .row {
  margin-top: 10px;
  /* box-shadow: 7px; */
}
.allboard-body {

  padding-top: 15px;
  height: 60px;
  color: white;
  background: linear-gradient(40deg, #2096ff, #05ffa3) !important;
  box-shadow: 0px 3px 20px rgb(160, 160, 160);
  font-size: 10px;
}
div.allboard-row {
  text-align: center;
  margin: auto;
  width: 75%;
}
.col-head {
  padding-top: 20px;
  height: 60px;
  color: black;
  background: transparent;
  /* font-size: 10px; */
}
div.row.allboard-body {
  margin-top: 8px;
}
.container-allboard {
}
.point {
  /* text-align: right; */
}
.spinner {
  padding-top: 20%;
}
</style>

