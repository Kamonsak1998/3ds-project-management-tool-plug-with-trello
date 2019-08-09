<template>
      <div class="container">
        <boardtotal></boardtotal>
         <allboard></allboard>
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

</style>
