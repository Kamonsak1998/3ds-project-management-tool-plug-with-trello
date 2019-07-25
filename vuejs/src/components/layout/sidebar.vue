<template lang="html">
  <div id="parentx">
    <vs-button @click="active=!active" color="primary" type="filled">...</vs-button>
    <vs-sidebar parent="body" default-index="1"  color="primary" class="sidebarx" spacer v-model="active">
      <div class="header-sidebar" slot="header">
        <vs-avatar  size="70px" src="https://randomuser.me/api/portraits/men/85.jpg"/>
      </div>
    </vs-sidebar>
  </div>

</template>

<script>
export default {
  data: () => ({
    active: false
  })
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

