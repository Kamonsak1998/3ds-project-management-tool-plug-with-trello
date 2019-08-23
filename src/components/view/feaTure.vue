<template>
  <div class="container">
    <div class="row">
      <!--  <div class="col-sm-3">
        <router-link :to="{name : 'leaderboyard'}">
          <div class="card card-feature p-4 shadow bg-white">
            <div class="card-body text-white">
              <p class="icon"></p>
              <p class="card-text">Leader Board</p>
            </div>
          </div>
        </router-link>
      </div>-->
      <div class="col-sm-4 ">
        <div class="card text-white bg-primary">
          <div class="card-body card-body-feature leaderboard pb-0">
            <div class="card-body-feature">
              <i class="icons font-2xl float-left d-block cui-dashboard"></i>
              <div class="text-value">Leader Board</div>
            </div>
          </div>
        </div>
      </div>

        <div class="col-sm-4 ">
        <div class="card text-white bg-info">
          <div class="card-body card-body-feature History pb-0">
            <div class="card-body-feature">
              <i class="icon-chart font-2xl float-left d-block "></i>
              <div class="text-value">History</div>
            </div>
          </div>
        </div>
      </div>

        <div class="col-sm-4 ">
        <div class="card text-white bg-warning">
          <div class="card-body card-body-feature Set-date  pb-0">
            <div class="card-body-feature">
              <i class="icon-calendar font-2xl float-left d-block "></i>
              <div class="text-value">Set date of sprint</div>
            </div>
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
.leaderboard {
      background-color: #20a8d8!important;
}
.card.bg-primary {
    border-color: #187da0;
}
/***********/
.History {
  background-color: #63c2de!important;
}
.card.bg-info {
    border-color: #2eadd3;
}

/**********/
.Set-date {
  background-color: #ffc107!important;
  border-color: #c69500;
}
.card.bg-warning {
    border-color: #c69500;
}
/***********/
.Burn-down {
 background-color: #f86c6b!important;
}
.bg-danger {
    background-color: #f86c6b!important;
}

/*************/
.card-body-feature {
  width: 100%;
  height: 120px;
  flex: 1 1 auto;
  padding-top: 17px;
}
.text-value {
    font-size: 20px;
    font-weight: 600;
}
</style>
