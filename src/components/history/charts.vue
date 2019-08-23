<template>
  <div class="container-fluid">
    <div class="animated fadeIn loading" v-if="isShowModel === false">
      <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner" type="grow"></b-spinner>
    </div>

    <div class="animated fadeIn font" v-if="isShowModel === true">
      <h1>HISTORY</h1>
      <hr class="my-4" />
      <b-card-group columns class="card-rows cols-2">
        <b-card class="shadow mb-5 bg-white rounded">
          <BarColumn v-bind:model="TotalModel" />
        </b-card>
        <b-card class="shadow mb-5 bg-white rounded">
          <burndownChart />
        </b-card>
      </b-card-group> 
        <carousel :navigationEnabled="true" :perPageCustom="[[360, 1], [1024, 3],[768,2]]"  :mouseDrag="true" :touchDrag="true"  class="mb-4" >
          <slide v-for="(models,index) in SprintModel.scoreOfSprint" :key="index" >
            <div class="card cardsprit mr-1 ml-1 shadow">
              <div class="card-body" @click="selectSprint(SprintModel.scoreOfSprint,index)" v-b-modal.modal-xl >  
                  <div class="text-value" >{{models.title}}</div>
                  <div class="text-value">{{models.date}}</div>             
              </div>
            </div>
          </slide>
        </carousel>
       <b-modal id="modal-xl" size="xl" title="Bootstrap-Vue" hide-footer hide-header centered	 >
          <Bar v-bind:model="select" />
       </b-modal >
    </div>
  </div>
</template>


<script>
import Bar from "@/components/history/Bar.vue";
import BarColumn from "@/components/history/BarColumn.vue";
import burndownChart from "@/components/burndownChart/burndownChart.vue";
import { mapGetters } from "vuex";
import { Carousel, Slide } from "vue-carousel";
import axios from "axios";

export default {
  data() {
    return {
      variants: ["dark"],
      TotalModel: Object,
      select: Object,
      SprintModel: {
        scoreOfSprint: Object
      },
      isShowModel: false,
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
    burndownChart,
    Carousel,
    Slide
  },
  methods: {
    selectSprint(models,index){
      this.select = models[index]
    },
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
.loading {
  position: absolute;
  top: 50%;
  left: 45%;
}
.font h1 {
  font-size: xxx-large;
  margin-bottom: 10px;
}
.cardsprit {
  border-radius: 25px;
  height: 200px;
  cursor: pointer;
  background-color:whitesmoke;
  /* background: linear-gradient(-68deg,#fbd5de, #ec9696); */
}

.text-value{
  color: white;
  text-shadow: 2px 2px 4px #000000;
   
}
</style>

