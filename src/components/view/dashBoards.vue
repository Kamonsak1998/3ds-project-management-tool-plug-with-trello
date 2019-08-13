<template>
  <div class="login">
    <div class="container">
      <div class="row">
        <div v-for="(result,index) in results" :key="index" class="col-sm-4">
          <div>
            <b-card
              overlay
              :img-src="result.prefs.backgroundImage"
              img-alt="Card Image"
              text-variant="white"
              :title="results[index].name"
              style="max-width: 20rem;"
            >
              <b-button variant="primary" @click="setboard(results,index)">Go to board</b-button>
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
        .post("http://localhost:9000/getdashboard", { token: this.token })
        .then(Response => {
          this.results = Response.data.board;
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
      results: []
    };
  },

  methods: {
    setboard(result, index) {
      const boardid = result[index].id;
      alert(boardid);
      // axios
      //   .post("http://ddc1cade.ngrok.io/setboardid", {
      //     token: this.token,
      //     boardid: boardid
      //   })
      //   .then(Response => {});
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
