<template>
  <div class="container-fluid">
    <div class="animated fadeIn loading" v-if="isShowModel === false">
      <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner" type="grow"></b-spinner>
    </div>

    <div class="animated fadeIn font text-c" v-if="isShowModel === true">
      <h1>HISTORY</h1>
      <hr class="my-4" />
      <b-card-group rows class="card-rows">
        <b-card class="shadow p-3 mb-5 bg-white rounded">
          <BarColumn v-bind:model="TotalModel" />
        </b-card>
      </b-card-group>

      <carousel
        :navigationEnabled="true"
        :perPageCustom="[[360, 1], [1024, 4],[768,2]]"
        :mouseDrag="true"
        :touchDrag="true"
        class="mb-4"
      >
        <slide v-for="(models,index) in this.SprintModel.scoreOfSprint" :key="index">
          <div class="card bg-primary cardsprit mr-1 ml-1 shadow rounded">
            <div class="card-body">
              <div class="text-value">{{SprintModel.scoreOfSprint[index].title}}</div>
              <div>{{SprintModel.scoreOfSprint[index].date}}</div>
            </div>
          </div>
        </slide>
      </carousel>

      <b-card-group columns class="card-columns mb-4">
        <div class="cols-3" v-for="(models,index) in this.SprintModel.scoreOfSprint" :key="index">
          <b-card class="shadow p-3 mb-5 bg-white rounded">
            <Bar v-bind:model="SprintModel.scoreOfSprint[index]" />
          </b-card>
        </div>
      </b-card-group>
    </div>
  </div>
</template>


<script>
import Bar from "@/components/history/Bar.vue";
import BarColumn from "@/components/history/BarColumn.vue";
import { mapGetters } from "vuex";
import { Carousel, Slide } from "vue-carousel";
import axios from "axios";

export default {
  data() {
    return {
      variants: ["dark"],
      TotalModel: Object,
      SprintModel: {
        scoreOfSprint: Object
      },
      isShowModel: false
    };
  },
  mounted: function() {
    this.getHistory();
  },
  computed: {
    ...mapGetters(["idBoard", "token"])
  },
  components: {
    Bar,
    BarColumn,
    Carousel,
    Slide
  },
  methods: {
    getHistory() {
      if (this.idBoard != "") {
        axios
          .post("http://localhost:9000/gethistory", {
            token: this.token,
            idBoard: this.idBoard
          })
          .then(resp => {
            this.TotalModel = resp.data.ScoreTotal;
            this.SprintModel = {
              ...this.SprintModel,
              ...{
                scoreOfSprint: resp.data.scoreOfSprint
              }
            };
            this.isShowModel = true;
          })
          .catch(err => {
            alert(err);
          });
        return;
      } else {
        this.$router.push("/dashboards");
        return;
      }
    }
  }
};
</script>

<style >
@media screen and (max-width: 768px) {
  .carousel {
  }
}
.loading {
  position: absolute;
  top: 50%;
  left: 45%;
}
.font h1 {
  font-size: 70px;
  margin-bottom: 10px;
}
.cardsprit {
  height: 200px;
}
</style>

