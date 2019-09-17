<template>
  <div class="card p-5">
    *First list:
    <b-form-select v-model="selectListed[0]">
      <option v-for="(list,index) in model" :value="list" :key="index">{{list.listName}}</option>
    </b-form-select>
    <br />Second list:
    <b-form-select v-model="selectListed[1]">
      <option v-for="(list,index) in model2" :value="list" :key="index">{{list.listName}}</option>
    </b-form-select>
    <br />Third list:
    <b-form-select v-model="selectListed[2]">
      <option v-for="(list,index) in model3" :value="list" :key="index">{{list.listName}}</option>
    </b-form-select>
  </div>
</template>

<script>
export default {
  props: {
    model: [],
    selectListed: [],
    listed: {
                required: true
            }
  },
  mounted(){
       this.selectListed[0] = this.listed[0] 
       this.selectListed[1] = this.listed[1]
       this.selectListed[2] = this.listed[2]
       console.log('this.selectListed[0]: ',this.selectListed[0]);
  },
  computed: {
    model2() {
      this.result = this.model.filter(list => {
        return list !== this.selectListed[0];
      });
      return this.result;
    },
    model3() {
      return this.result.filter(list => {
        return list !== this.selectListed[1];
      });
    },
  },
  data() {
    return {
      result: ""
    };
  },
};
</script>

<style>
</style>
