<template>
  <div class="login">
    <div class="container">
      <div class="row">
        <div v-for="(result,i) in results" :key="i" class="col-sm-4">
          <div class="card-dash p-4 shadow bg-white text-center">
            <div class="card-body">
              <p class="card-text" v-html="result.prevDesc"></p>
              <!-- <router-link :to="{name : 'leaderboard'}">
                   <a href="#" class="btn btn-primary">Select Project</a>
              </router-link>-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  mounted: function() {
    if (this.token != "") {
      axios
        .post("http://f4d4472f.ngrok.io/getdashboard", this.token)
        .then(Response => {
          console.log('Db',Response);
        });
      return;
    } else {
      this.$router.push("/auth/login");
      return;
    }
  },
  computed: {
    ...mapGetters(["token","idUser"])
  },
  data() {
    return {
      results: [
        {
          title: "BENZ",
          prevDesc: "ProJect 1 ",
          color: "primary"
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

  methods: {}
};
</script>

<style>
.row {
  padding-top: 50px;
}
.card-dash {
  margin-top: 15px;

  width: 250px;
  border-radius: 25px;
}
.card-text {
  font-size: 25px;
  white-space: nowrap;
  width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.btn {
  margin: 2px;
}
</style>
