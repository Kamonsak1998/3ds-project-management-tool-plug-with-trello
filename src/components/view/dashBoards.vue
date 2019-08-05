<template>
  <div class="login">
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <div class="card p-4 shadow bg-white">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p
                class="card-text"
              >With supporting text below as a natural lead-in to additional content.
              With supporting text below as a natural lead-in to additional content.
              With supporting text below as a natural lead-in to additional content.
              With supporting text below as a natural lead-in to additional content.
              With supporting text below as a natural lead-in to additional content.
              With supporting text below as a natural lead-in to additional content.
              With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card p-4 shadow bg-white">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p
                class="card-text"
              >With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card p-4 shadow bg-white">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p
                class="card-text"
              >With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
      <!-- <button
        type="submit"
        @click="auth"
        class="btn btn-success"
      >ค้นหา</button>-->
      <div class="row">
        <div v-for="(result,i) in results" :key="i" class="col-sm-4">
          <div class="card p-4 shadow bg-white text-center">
            {{ result.title }}
            <div class="card-body">
              <p class="card-text" v-html="result.prevDesc"></p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
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
      bound: 0,
      results: [
        {
          title: "BENZ",
          prevDesc:
            "With supporting text below as a natural lead-in to additional content."
        },
        {
          title: "NON",
          prevDesc: "NON1"
        },
        {
          title: "arram",
          prevDesc: "desc3"
        },
        {
          title: "gono",
          prevDesc: "desc7"
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
  text-align: left;
  padding-left: 60px;
  /* float: right; */
  padding-top: 50px;
}
.card {
  border-radius: 25px;
}
</style>
