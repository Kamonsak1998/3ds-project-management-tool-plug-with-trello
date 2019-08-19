<template>
  <div class="container pt-5">
    <div class="row">
      <div v-for="(result,index) in results" :key="index" class="col-sm-4">
        <b-card
          overlay
          :img-src="result.prefs.backgroundImage"
          img-alt="Card Image"
          text-variant="white"
          :title="result.name"
          style="max-width: 30rem;"
          align="center"
          border-variant="0"
          class="imgbg cursor shadow-lg text"
          @click="setboard(results,index)"
        ></b-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapGetters } from "vuex";
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
    ...mapActions(["getBoard"]),
    setboard(result, index) {
      const boardid = result[index].id;
      this.getBoard(boardid);
      this.$router.push("/feature");
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
.imgbg {
  width: 100%;
  height: 180px;
  border-radius: 25px;
}

.card-img {
  border-radius: 25px;
  width: 100%;
  height: 100%;
}
.cursor {
  cursor: pointer;
}
.text {
  color: white;
  text-shadow: 2px 2px 4px #000000;
}
</style>
