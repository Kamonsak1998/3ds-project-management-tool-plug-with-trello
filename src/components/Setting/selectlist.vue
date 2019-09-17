<template>
  <div class="card p-5">
    *First list:
    <b-form-select v-model="selectedone">
      <option v-for="(list,index) in model" :value="list" :key="index">{{list.listName}}</option>
    </b-form-select>
    <br />Second list:
    <b-form-select v-model="selectedtwo">
      <option v-for="(list,index) in model2" :value="list" :key="index">{{list.listName}}</option>
    </b-form-select>
    <br />Third list:
    <b-form-select v-model="selectedthree">
      <option v-for="(list,index) in model3" :value="list" :key="index">{{list.listName}}</option>
    </b-form-select>
    <button @click="test"></button>
  </div>
</template>

<script>
export default {

  props: {
    model: [],
    selectListed: {}
  },
  computed: {
    model2() {
      this.result = this.model.filter(list => {
        return list !== this.selectedone;
      });
      return this.result;
    },
    model3() {
      return this.result.filter(list => {
        return list !== this.selectedtwo;
      });
    },
  },
  data() {
    return {
        selectedone: "" ,
        selectedtwo: "" ,
        selectedthree: "" ,
      result: ""
    };
  },
  mounted: function() {
    
    
    this.test();
  },
  watch: {
    
  },
  methods: {
    test() {
      console.log(this.selectListed);
    }
  }
};
</script>

<style>
</style>
