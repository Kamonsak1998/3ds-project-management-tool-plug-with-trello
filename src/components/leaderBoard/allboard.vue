<template>
  <div class="container">
    <div class="w3-container">
      <h2>Slideshow Indicators</h2>
      <p>An example of using buttons to indicate how many slides there are in the slideshow, and which slide the user is currently viewing.</p>
    </div>

    <div class="w3-content" style="max-width:800px">
      <img class="mySlides" src="img_nature_wide.jpg" style="width:100%" />
      <img class="mySlides" src="img_snow_wide.jpg" style="width:100%" />
      <img class="mySlides" src="img_mountains_wide.jpg" style="width:100%" />
    </div>

    <div class="w3-center">
      <div class="w3-section">
        <button class="w3-button w3-light-grey" onclick="plusDivs(-1)">❮ Prev</button>
        <button class="w3-button w3-light-grey" onclick="plusDivs(1)">Next ❯</button>
      </div>
      <button class="w3-button demo" onclick="currentDiv(1)">1</button>
      <button class="w3-button demo" onclick="currentDiv(2)">2</button>
      <button class="w3-button demo" onclick="currentDiv(3)">3</button>
    </div>
  </div>
</template>

<script>
export default {
    date:{
       
    },
    methods:{
        

    }

}
</script>

<style>
</style>
