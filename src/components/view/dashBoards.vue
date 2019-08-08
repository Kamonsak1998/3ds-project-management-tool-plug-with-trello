<template>
  <div class="login">
    <div class="container">
      <div class="row">
        <div v-for="(result,i) in results" :key="i" class="col-sm-4">
          <div class="card-dash p-4 shadow bg-white text-center">
            <!-- {{ result.title }} -->
            <div class="card-body">
              <p class="card-text"  v-html="result.prevDesc"></p>
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
import axios from "axios";
export default {
  data() {
    return {
      results: [
        {
          title: "BENZ",
          prevDesc:
            "ProJect 1 ",
          color:"primary"
        },
        {
          title: "NON",
          prevDesc: "Project 2 "
        },
        {
          title: "arram",
          prevDesc: "Project 3 "
        },
        {
          title: "gono",
          prevDesc: "Project 4 "
        },
        {
          title: "beam",
          prevDesc:
            "With supporting text below as a natural lead-in to additional content"
        }
      ]
    };
  },
  mounted: {},
  methods: {
    auth() {
      axios.get("http://localhost:9000/getboard").then(res => {
        console.log(res);
        // const token = res.data.acctoken;
        // const stat = res.data.accstat;
        if (stat == true) {
          // this.$store.commit("setToken", token);
          // this.$router.push("/dashBoards");
        }
      });
    }

    // login:function(){
    //     this.$router.push("/login");
    // }
  }
};
</script>

<style>
.row {
  
  padding-top: 50px;  
  
  
}
.card-dash{
  margin-top: 15px;
  /* white-space: nowrap;  */
  width: 250px; 
  /* overflow: hidden; */
  /* height:100%; */
  /* overflow: hidden; text-overflow: ellipsis; -webkit-box-orient: vertical; display: -webkit-box; -webkit-line-clamp: 2; */
  border-radius: 25px;
}
.card-text {
  font-size: 25px;
  white-space: nowrap; 
  width: 140px;
  overflow: hidden;
   text-overflow: ellipsis;
}
.btn{
  margin:2px;
}
</style>
