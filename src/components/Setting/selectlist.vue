<template>
  <div class="card">
    <br />
    <b-form-select v-model="selectedone" :options="list"></b-form-select>
    <div class="mt-1">
      Selected:
      <strong>{{ selectedone }}</strong>
    </div>

    <br />
    <b-form-select v-model="selectedtwo" :options="list"></b-form-select>
    <div class="mt-1">
      Selected:
      <strong>{{ selectedtwo }}</strong>
    </div>

    <br />
    <b-form-select v-model="selectedthree" :options="list"></b-form-select>
    <div class="mt-1">
      Selected:
      <strong>{{ selectedthree }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    model: {
      required: true
    }
  },
  data() {
    return {
      listed: [],
      selectedone: "",
      selectedtwo: "",
      selectedthree: "",
      list: [{ value: "", text: "" }]
      // cardlist: [
      //   { value: null, text: "Please select an option" },
      //   { value: "a", text: "This is First option"},
      //   { value: "b", text: "Selected Option"},
      //   {
      //     value: { C: "3PO" },
      //     text: "This is an option with object value",
      //     disabled: false
      //   },
      //   { value: "d", text: "This one is disabled", disabled: true }
      // ],
    };
  },
  mounted: function() {
    // console.log(22222, this.model.list[0].ListName);
    // console.log(22222, this.model.list);
    this.chartOptions = {...this.chartOptions, ...{title: {text: this.model.title}}};
    console.log(1111111, this.list);
    this.list[0] = this.model.list;
  },
  methods: {}
};
</script>

<style>
</style>