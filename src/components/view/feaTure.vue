<template>
  <div class="login">
    <div class="container">
      <div class="row">
        <div v-for="(result,i) in results" :key="i" class="col-sm-3">
          <div class="card-fea p-4 shadow bg-white">
            <div class="card-body">
              <p class="card-text" v-html="result.prevDesc"></p>
               <!-- <router-link :to="{name : 'leaderboard'}">
                   <a href="#" class="btn btn-primary">Select Project</a>
                </router-link> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      results: [
        {
          title: "BENZ",
          prevDesc:
            "LeaderBoard"
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
          prevDesc:
            "Burn down chart"
        }
      ]
    };
  },
  mounted: {},
  methods: {
    
  }
};
</script>

<style>
.row {

}
.card-fea{
  margin-top:100px;
  border-radius: 25px;
}
.card-text {
  font-size: 20px;
  /* padding-top:10px; */
   
    text-align: center;
  /* overflow: hidden; */
   /* text-overflow: ellipsis; */
  /* height:100%; */
}

.btn{
  margin:2px;
}

.card-body{

}
.card-text:last-child {
    margin-bottom: 0;
    text-align: center;
}
</style>
