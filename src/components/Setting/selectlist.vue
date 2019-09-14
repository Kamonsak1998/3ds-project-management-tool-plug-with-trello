<template>
  <div class="card">
    <br />
    <b-form-select v-model="selectedone" :options="model"></b-form-select>
    <div class="mt-1">
      Selected:
      <strong>{{ selectedone }}</strong>
    </div>

    <br />
    <b-form-select v-model="selectedtwo" :options="model"></b-form-select>
    <div class="mt-1">
      Selected:
      <strong>{{ selectedtwo }}</strong>
    </div>

    <br />
    <b-form-select v-model="selectedthree" :options="model"></b-form-select>
    <div class="mt-1">
      Selected:
      <strong>{{ selectedthree }}</strong>
    </div>
  </div>
  
</template>

<script>
import DateRangePicker from "@/components/Setting/DateRangePicker";

export default {
  props: {
            // model: {
            //     required: true
            // }
        },
  data() {
    return {
      selectedone: '',
      selectedtwo: '',
      selectedthree: '',
      model:[],
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
  methods: {

    }
};
</script>

<style>
</style>