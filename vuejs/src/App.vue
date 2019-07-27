<template>
  <div id="app">
    <Sidebar />
    <Header />
    <main class="Site-content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/layout/header.vue";
import Sidebar from "./components/layout/sidebar.vue";
import Footer from "./components/layout/footer.vue";
export default {
  name: "app",
  components: {
    Sidebar,
    Header,
    Footer
  }
};
</script>

<style>
#app {
  background-color: #f8f9f9;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.Site-content {
  flex: 1;
}
</style>
