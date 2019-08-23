<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-3">
        <router-link :to="{name : 'leaderboard'}">
          <div class="card-leader p-4 shadow bg-white">
            <div class="card-body text-white">
              <p class="card-text">Leader Board</p>
            </div>
          </div>
        </router-link>
      </div>

      <div class="col-sm-3">
        <router-link :to="{name : 'charts'}">
          <div class="card-History p-4 shadow bg-white">
            <div class="card-body text-white">
              <p class="card-text">History</p>
            </div>
          </div>
        </router-link>
      </div>
      <div class="col-sm-3">
        <router-link :to="{name : 'setdatetime'}">
          <div class="card-Set p-4 shadow bg-white">
            <div class="card-body text-white">
              <p class="card-text">Set date of sprint</p>
            </div>
          </div>
        </router-link>
      </div>
      <div class="col-sm-3">
        <div class="card-Burn p-4 shadow bg-white">
          <div class="card-body text-white">
            <p class="card-text">Burn down chart</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import { mapGetters } from "vuex";
export default {
  mounted: function() {
    if (this.idBoard != "") {
      return;
    } else {
      this.$router.push("/dashboards");
      return;
    }
  },
  computed: {
    ...mapGetters(["idBoard"])
  },
  data() {
    return {
      results: [
        {
          title: "BENZ",
          prevDesc: "LeaderBoard"
        },
        {
          title: "NON",
          prevDesc: "History"
        },
        {
          title: "arram",
          prevDesc: "Set date of sprint"
        },
        {
          title: "beam",
          prevDesc: "Burn down chart"
        }
      ]
    };
  }
};
</script>

<style>
.card-leader {
  height: 60%;
  margin-top: 100px;
  border-radius: 25px;
  background: linear-gradient(40deg, #2096ff, #05ffa3) !important;
}
.card-History {
  height: 60%;
  margin-top: 100px;
  border-radius: 25px;
  background: linear-gradient(40deg, #ff6ec4, #7873f5) !important;
}
.card-Set {
  height: 60%;
  margin-top: 100px;
  border-radius: 25px;
  background: linear-gradient(40deg, #ffd86f, #fc6262) !important;
}
.card-Burn {
  height: 60%;
  margin-top: 100px;
  border-radius: 25px;
  background: linear-gradient(40deg, #45cafc, #303f9f) !important;
}
.card-text {
  font-size: 20px;
  text-align: center;
  color: white;
  text-shadow: 2px 2px 4px #000000;
}
.card-text:last-child {
  margin-bottom: 0;
  text-align: center;
}
</style>
