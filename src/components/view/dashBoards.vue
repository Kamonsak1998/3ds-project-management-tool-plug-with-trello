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
          class="imgbg shadow-lg block"
          @click="setboard(results,index)"
        >
          <h3 class="animate-text">
            <b-card-text>Choose this project</b-card-text>
          </h3>
        </b-card>
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
            this.results = Response.data;
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

<style lang="scss">
.imgbg {
  width: 100%;
  height: 180px;
  border-radius: 25px;
  overflow: hidden;
  cursor: pointer;
  color: white;
  text-shadow: 2px 2px 4px #000000;
}
.card-img {
  border-radius: 25px;
  width: 100%;
  height: 100%;
}
h3 {
  font-weight: 100;
  font-style: italic;
  transform: translateX(200px);
}
.animate-text {
  opacity: 0;
  transition: all 0.6s ease-in-out;
}
.block:hover .animate-text {
  transform: translateX(0);
  opacity: 1;
}
.block:hover {
  z-index: 100;
  -webkit-animation: scale 0.3s linear;
  -moz-animation: scale 0.3s linear;
  animation: scale 0.3s linear;
  transform-origin: 50% 50%;
  animation-fill-mode: forwards;
}
@keyframes scale {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
    -webkit-box-shadow: 10px 10px 60px 10px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 10px 10px 60px 10px rgba(0, 0, 0, 0.1);
    box-shadow: 10px 10px 60px 10px rgba(0, 0, 0, 0.1);
  }
}

@keyframes scaledown {
  0% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
