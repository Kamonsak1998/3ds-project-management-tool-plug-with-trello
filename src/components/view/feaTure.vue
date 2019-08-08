<template>
    <div class="container">
        <div v-for="(result,i) in results" :key="i" class="col-sm-4">
          <div class="card p-4 shadow bg-white text-center">
            <!-- {{ result.title }} -->
            <div class="card-body">
              <p class="card-text" v-html="result.prevDesc"></p>
               <!-- <router-link :to="{name : 'leaderboard'}">
                   <a href="#" class="btn btn-primary">Select Project</a>
                </router-link> -->
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
