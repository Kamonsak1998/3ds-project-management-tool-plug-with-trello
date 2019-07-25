<template >
  <div>
    <slider
      :width="300"
      format="push"
      direction="left"
      :opacity="0.15"
      :links="[{'id': 1, 'text': 'Link 1', 'url': 'https://github.com'}, {'id': 2, 'text': 'Link 2', 'url': 'https://github.com'}]"
    ></slider>
  </div>
</template>

<script>
import Slider from "@jeremyhamm/vue-slider";

export default {
  components: {
    slider: Slider
  }
};
</script>

<style >
#parentx {
  overflow: hidden;
  height: 500px;
  position: relative;
}

.header-sidebar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}
</style>

