<template>
  <div class="animated fadeIn">
    <b-card-group rows class="card-rows">
      <b-card class="shadow p-3 mb-5 bg-white rounded">
        <BarColumn v-bind:model="model" />
      </b-card>
    </b-card-group>
    <b-card-group rows class="card-rows" v-for="(models,index) in model" :key="index" >
      <b-card class="shadow p-3 mb-5 bg-white rounded" >
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
      index: [this.models]
    };
  },
  mounted: function() {
    if (this.idBoard != "") {
      axios
        .post("http://localhost:9000/gethistory", {
          token: this.token,
          idBoard: this.idBoard
        })
        .then(resp => {
          this.model = resp.data;
          console.log("chart", this.model);
          this.setData()
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
  computed: {
    ...mapGetters(["idBoard", "token"])
  },
  components: {
    Bar,
    BarColumn
  },
  methods: {
    setData(models){ 
      this.$emit('setData',this.models)
    }
  },
};
</script>

