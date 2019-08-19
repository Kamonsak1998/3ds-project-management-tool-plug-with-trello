<template>
  <div class="animated fadeIn">
    <b-card-group rows class="card-rows">
      <b-card class="shadow p-3 mb-5 bg-white rounded">
        <BarColumn v-bind:model="model" />
      </b-card>
    </b-card-group>
    <b-card-group rows class="card-rows" v-for="(models,index) in this.model.scoreOfSprint" :key="index">
      <b-card class="shadow p-3 mb-5 bg-white rounded">
        <Bar v-bind:model="model" />
      </b-card>
    </b-card-group>
  </div>
</template>


<script>
import Bar from "@/components/history/Bar.vue";
import BarColumn from "@/components/history/BarColumn.vue";
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      model: Object,
    };
  },
  mounted: function() {
    this.getHistory()
  },
  computed: {
    ...mapGetters(["idBoard", "token"])
  },
  components: {
    Bar,
    BarColumn
  },
  methods:{
    getHistory(){
      if (this.idBoard != "") {
        axios
                .post("http://localhost:9000/gethistory", {
                  token: this.token,
                  idBoard: this.idBoard
                })
                .then(resp => {
                  this.model = resp.data;
                  console.log("chart", this.model);
                })
                .catch(err => {
                  alert(err);
                });
        return;
      } else {
        this.$router.push("/dashboards");
        return;
      }
    },
  }
};
</script>

