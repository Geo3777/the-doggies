<template>
  <div class="container-fluid m-0 p-0">
    <div class="slide">
      <app-header ref="header"></app-header>
    </div>
    <div class="slide">
      <app-explorer ref="explorer"></app-explorer>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Explorer from "./components/Explorer.vue";
export default {
  components: {
    appHeader: Header,
    appExplorer: Explorer,
  },
  data() {
    return {
      activeComponent: "componentA",
      isHeaderShowing: true,
      isExplorerShowing: false,
    };
  },
};
</script>

<style scoped>
.container-fluid {
  position: relative;
  height: 100vh;
  overflow: auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}
.slide {
  height: 100vh;
  scroll-snap-align: center;
  scroll-behavior: smooth;
}
</style>
