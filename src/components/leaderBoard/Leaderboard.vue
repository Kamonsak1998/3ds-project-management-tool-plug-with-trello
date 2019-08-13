<template>
      <div class="container">
        <boardtotal></boardtotal>
         <!-- <allboard></allboard> -->
      </div>
</template>

<script>
import boardtotal from '@/components/leaderBoard/boardtotal.vue'
import allboard from '@/components/leaderBoard/allboard.vue'

export default {
  components: {
    boardtotal,
    allboard,
  }
}
</script>

<style>
/* .container {
    width: 0%;
    padding-right: 0;
    padding-left: 0;
    margin-right: 0;
    margin-left: 0;
} */
</style>
