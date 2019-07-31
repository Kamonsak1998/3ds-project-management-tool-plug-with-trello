<template>
  <div>
      <button @click="click">
          click
      </button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
   
  },
  methods: {    
      click(){
           axios
      .get(
        "https://api.trello.com/1/boards/5d36c7de529359859075da3a?fields=name&lists=all&list_fields=all,url&key=94950bb5fc0cd8bb15072e48e7e3010e&token=9f4f27201a97a252fe6b4bc3b9daccfa182a60c190d1edb301fda87f471438ae"
      )
      .then(res => {
          console.log(res);
          
      });
      }
  },
};
</script>
