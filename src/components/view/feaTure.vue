<template>
  <div class="container pt-5">
    <div class="row">
      <div class="col-sm-4">
        <router-link  style="text-decoration:none" :to="{name : 'leaderboard'}">
          <div class="card text-white bg-primary">
            <div class="card-body card-body-feature leaderboard-f pb-0">
              <div class="card-body-feature">
                <i class="icons font-2xl d-block cui-dashboard"></i>
                <div class="text-value">Leader Board</div>
              </div>
            </div>
          </div>
        </router-link>
      </div>

      <div class="col-sm-4">
        <router-link  style="text-decoration:none" :to="{name : 'charts'}">
          <div class="card text-white bg-info">
            <div class="card-body card-body-feature History-f pb-0">
              <div class="card-body-feature">
                <i class="icon-chart font-2xl d-block"></i>
                <div class="text-value">History</div>
              </div>
            </div>
          </div>
        </router-link>
      </div>

      <div class="col-sm-4">
        <router-link  style="text-decoration:none" :to="{name : 'setdatetime'}">
          <div class="card text-white bg-warning">
            <div class="card-body card-body-feature Set-date-f pb-0">
              <div class="card-body-feature">
                <i class="icon-calendar font-2xl d-block"></i>
                <div class="text-value">Set date of sprint</div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  mounted: function() {
    this.checkidBoard();
    this.checkDate();
  },
  computed: {
    ...mapGetters(["idBoard", "Sprints"])
  },
  methods: {
    checkidBoard() {
      if (this.idBoard != "") {
        return;
      } else {
        this.$router.push("/dashboards");
        return;
      }
    },
    checkDate: function() {
      axios
        .post("http://localhost:9000/checksetdate", { idBoard: this.idBoard })
        .then(res => {
          if (res.data.status == false) {
          this.$router.push("/setdatetime");
          }
        }).catch(err => {
          alert(err);
          
        })
    },
  }
};
</script>

<style>
.card.bg-primary {
  border-color: #187da0;
}

.bg-primary:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}
/***********/
.card.bg-info {
  border-color: #2eadd3;
}
.bg-info:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}
/**********/
.card.bg-warning {
  border-color: #c69500;
}
.bg-warning:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}
/***********/
.card-body-feature {
  width: 100%;
  height: 120px;
  padding-top: 17px;
}
.text-value {
  font-size: 20px;
  font-weight: 600;
}
.boardff {
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}
</style>
