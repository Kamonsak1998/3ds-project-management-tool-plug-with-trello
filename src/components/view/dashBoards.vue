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
    this.getboardtrello();
  },
  computed: {
    ...mapGetters(["token", "idBoard"])
  },
  data() {
    return {
      results: []
    };
  },

  methods: {
    ...mapActions(["getBoard", "getNameBoard"]),
    setboard(result, index) {
      const boardid = result[index].id;
      const nameBoard = result[index].name;
      this.getBoard(boardid);
      this.getNameBoard(nameBoard);
      if (this.idBoard != "") {
        this.$router.push("/feature");
      } else {
        return;
      }
    },
    getboardtrello() {
      if (this.token != "") {
        axios
          .post("http://localhost:9000/getdashboard", { token: this.token })
          .then(Response => {
            console.log(Response);
            
            this.results = Response.data.board;
          });
        return;
      } else {
        this.$router.push("/auth/login");
        return;
      }
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
