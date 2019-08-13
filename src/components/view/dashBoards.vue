<template>
  <div class="login">
    <div class="container">
      <div class="row">
        <div v-for="(result,index) in results" :key="index" class="col-sm-4">
          <div>
            <b-card overlay :img-src="getImageUrl(index)" img-alt="Card Image" text-variant="white">
              <h5>{{results[index].name}}</h5>
              <b-button href="#" variant="primary" @click="setboard(results,index)">Go to board</b-button>
            </b-card>
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
        .post("http://6454d735.ngrok.io/getdashboard", { token: this.token })
        .then(Response => {
          console.log("Db", Response);
          this.results = Response.data.board
        });
      return;
    } else {
      this.$router.push("/auth/login");
      return;
    }
  },
  computed: {
    ...mapGetters(["token", "idUser"])
  },
  data() {
    return {
      results: [
      ]
    };
  },

  methods: {
    getImageUrl(index) {
      return this.results[index].prefs.backgroundImage
    },
    setboard(result,index) {
      const boardid = result[index].id
      alert(boardid)
      axios
              .post("http://ddc1cade.ngrok.io/setboardid", {token: this.token, boardid: boardid})
              .then(Response => {

              })
    }
  }
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


</style>
