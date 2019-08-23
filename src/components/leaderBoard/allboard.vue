<template>
  <div class="col-lg-9 mx-auto">
  
    <div class="animated fadeIn loading" v-if="like === false">
      <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner" type="grow"></b-spinner>
    </div>

    <div class="allboard-row allboard" v-if="like===true">
      <div class="row row-head">   
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
      <div class="row allboard-body" v-for="(user,key) in users" :key="user">
        <div class="col col-body">{{key+1}}</div>
        <div class="col col-body">{{user.name}}</div>
        <div class="col col-body">{{user.point}}</div>
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
          if ((err.message = "connection lost")) {
            alert("connection lost");
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
    font-size: 20px;
}
}
.allboard-row .row-head + .row-head {
  margin-top: 10px;
  box-shadow: 7px;
}
.loading {
  position: fixed;
  top: 50%;
  left: 45%;
}
.allboard-body {

  padding-top: 15px;
  height: 60px;
  color: white;
  background: linear-gradient(40deg, #2096ff, #05ffa3) !important;
  box-shadow: 0px 3px 20px rgb(160, 160, 160);
  font-size: 16px;
}
div.allboard-row {
  margin: auto;
  width: 95%;
}
.col-head {
  padding-top: 20px;
  height: 60px;
  color: black;
  background: transparent;
  font-size: 10px;
}
div.row.allboard-body {
  border-collapse: collapse;
  margin-top: 8px;
  
}
.spinner {
  padding-top: 20%;
}
.col-body{
    width: 130px;
    padding-left: 0px;
    padding-right: 0px;
    font-weight: unset;
    line-height: 1.4;
}
.col-head{
    font-size: 15px;
    color: black;
    line-height: 1.4;
    text-transform: uppercase;
    background-color: rgba(255, 255, 255, 0.32);
}
</style>

