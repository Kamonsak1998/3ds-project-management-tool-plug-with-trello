<template>
  <div class="login">
    <div class="container">
      <div class="row">
        <div class="col-sm-3">
          <div class="card-leader p-4 shadow bg-white">
            <div class="card-body">
              <p class="card-text">LeaderBoard</p>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card-History p-4 shadow bg-white">
            <div class="card-body">
              <p class="card-text">History</p>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card-Set p-4 shadow bg-white">
            <div class="card-body">
              <p class="card-text">Set date of sprint</p>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card-Burn p-4 shadow bg-white">
            <div class="card-body">
              <p class="card-text">Burn down chart</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
    ...mapGetters([ "idBoard"])
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
  },

 
   
};
</script>

<style>

.card-leader {
  margin-top: 100px;
  border-radius: 25px;
  background: linear-gradient(40deg, #2096ff, #05ffa3) !important;
}
.card-History {
  margin-top: 100px;
  border-radius: 25px;
  background: linear-gradient(40deg, #ff6ec4, #7873f5) !important;
}
.card-Set {
  margin-top: 100px;
  border-radius: 25px;
  background: linear-gradient(40deg,#ffd86f,#fc6262)!important;
}
.card-Burn {
  margin-top: 100px;
  border-radius: 25px;
  background: linear-gradient(40deg,#45cafc,#303f9f)!important;
}
.card-text {
  font-size: 20px;
  /* padding-top:10px; */

  text-align: center;
  /* overflow: hidden; */
  /* text-overflow: ellipsis; */
  /* height:100%; */
}

.btn {
  margin: 2px;
}


.card-text:last-child {
  margin-bottom: 0;
  text-align: center;
}
</style>
