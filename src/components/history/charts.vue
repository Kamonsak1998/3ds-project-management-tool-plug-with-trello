<template>
  <div class="container-fluid">
    <div class="animated fadeIn loading" v-if="isShowModel === false">
      <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner" type="grow"></b-spinner>
    </div>

    <div class="animated fadeIn font" v-if="isShowModel === true">
      <h1>HISTORY</h1>
      <hr class="my-4" />

      <div class="input-group input-group-lg my-3"> 
          <div class="input-group-prepend">
            <span class="input-group-text"><span class="cui-magnifying-glass"></span></span>
          </div>
          <input type="text" id="search" class="form-control" v-model="search" placeholder="Search Sprint..." aria-label="Search" autocomplete="off">
      </div>

      <b-card-group columns class="card-rows cols-2 mb-3">
        <b-card class="shadow mb-4 bg-white rounded"> 
          <BarColumn v-bind:model="TotalModel" />
        </b-card>
        <b-card class="shadow mb-4 bg-white rounded">
          <carousel :per-page="1" :scrollPerPage="false" :centerMode="true" :paginationEnabled="false" class="mb-4">
            <slide v-for="(models,index) in burndown" :key="index">
              <burndownChart v-bind:model="burndown" />
            </slide>
          </carousel>
        </b-card>
      </b-card-group>

      <!-- <b-card-group columns class="card-rows cols-2 mb-3">
        <b-card class="shadow mb-4 bg-white rounded"> 
        </b-card>
        <b-card class="shadow mb-4 bg-white rounded">  
          <Pie v-bind:model="TotalModel" />
        </b-card>
      </b-card-group> -->

      <carousel :navigationEnabled="true" :perPageCustom="[[320, 1],[1024, 3],[768,2]]" :scrollPerPage="false" :centerMode="true" :paginationPadding="3" :paginationEnabled="false">
        <slide v-for="(models,index) in filteredSprintModel" :key="index">
          <div class="card cardsprit mr-1 ml-1 shadow">
            <div class="card-body">
              <div class="text-value">{{models.title}}</div>
              <p>{{models.startDate}} - {{ models.endDate}}</p>
              <button class="btn-hover color-8"  @click="selectSprint(filteredSprintModel,index)" v-b-modal.modal-xl>
                <i class="icon-chart font-2xl d-block"></i>
              </button>
            </div>
          </div>
        </slide>
      </carousel>

      <b-modal id="modal-xl" size="xl" title="Bootstrap-Vue" hide-footer hide-header centered>
        <Bar v-bind:model="select" />
      </b-modal>
    </div>
  </div>
</template>


<script>
import Bar from "@/components/history/Bar.vue";
import BarColumn from "@/components/history/BarColumn.vue";
import burndownChart from "@/components/burndownChart/burndownChart.vue";
import Pie from "@/components/history/Pie.vue";
import { mapGetters } from "vuex";
import { Carousel, Slide } from "vue-carousel";
import axios from "axios";

export default {
  data() {
    return {
      search:'',
      TotalModel: Object,
      burndown:Object,
      select: Object,
      SprintModel: {
        scoreOfSprint: Object
      },
      isShowModel: false
    };
  },
  mounted: function() {
    this.getHistory();
    this.getburndownChart();
  },
  computed: {
    ...mapGetters(["idBoard", "token"]),
    filteredSprintModel:function(){
      return this.SprintModel.scoreOfSprint.filter((models) => {
        return models.title.match(this.search);
      })
    }
  },
  components: { 
    Bar,
    BarColumn,
    burndownChart,
    Pie,
    Carousel,
    Slide
  },
  methods: {
    selectSprint(models, index) {
      this.select = models[index];
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
      } else {
        this.$router.push("/dashboards");
      }
    },  
    getburndownChart(){
      axios.post("http://localhost:9000/setburndownchart",{idBoard : this.idBoard}).then(res => {
        this.burndown = res.data.ScoreTotal[0]
      }).catch(err => {
        alert(err);
      })
    }
  }
};
</script>

<style >
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.font h1 {
  font-size: xxx-large;
  margin-bottom: 10px;
}
.cardsprit {
  overflow: hidden;
  border-radius: 20px;
  background-color: #e3e8ed;
  height: 170px;
  text-shadow: 2px 2px 4px white;
  color: #3c4b64;
}

.btn-hover {
  width: 100px;
  font-weight: 600;
  color: #fff;
  margin: 5px;
  height: 50px;
  text-align: center;
  border: none;
  background-size: 300% 100%;
  border-radius: 50px;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}

.btn-hover:hover {
  background-position: 100% 0;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}

.btn-hover:focus {
  outline: none;
}
.btn-hover.color-8 {
  background-image: linear-gradient(
    to right,
    #29323c,
    #485563,
    #2b5876,
    #4e4376
  );
  box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);
}

</style>

