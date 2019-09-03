<template>
  <div class="container">
   <div class="animated fadeIn loading" v-if="isShowModel === false">
      <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner" type="grow"></b-spinner>
    </div>   
    <div class="allboard-row allboard col-lg-9 mx-auto"  v-if="isShowModel === true">
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
      <div class="row allboard-body" v-for="(user,key) in users" :key="key">
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
      key: 1,
      users: [],
      user: { name: '', point: 0 },
      isShowModel: false,
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
        .post("http://localhost:9000/getleaderboard", {
          token: this.token,
          idBoard: this.idBoard
        })
        .then(response => {
          this.isShowModel = true;
          this.users = response.data.board;
        })
        .catch(err => {
          if (err) {
            alert("connection lost");
          }
        });
    }
  }
};
</script>

<style>
/* .allboard-row .row-head + .row-head {
  margin-top: 15px;
  box-shadow: 7px;
} */
.allboard-body {
  box-shadow:0 2px 3px 0px rgba(0,0,0,0.25);
  padding-top: 15px;
  height: 60px;
  color: white;
  background: linear-gradient(40deg, #ff6f69, #ffcc5c) !important;
  font-size: 16px;
  border-radius: 5px;
  /* border-color:red; */
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
  border-radius: 8px;

}
div.row.allboard-body {
  border-collapse: collapse;
  margin-top: 12px;

}
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.col-body {
  width: 130px;
  padding-left: 0px;
  padding-right: 0px;
  font-weight: unset;
  line-height: 1.4;
}
.allboard-body:hover {
    
   -webkit-transform: scale(1.1);
   -ms-transform: scale(1.1);
    transform: scale(1.1); 
    box-shadow:0 8px 20px 0px rgba(0,0,0,0.125);
}
.col-head {
  font-size: 15px;
  color: black;
  line-height: 1.4;
  text-transform: uppercase;
  background-color: rgba(255, 255, 255, 0.32);
}
</style>

