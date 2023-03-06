<template>
  <div id="container">
    <app-header id="header"></app-header>
    <app-explorer id="explorer"></app-explorer>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Explorer from "./components/Explorer.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    appHeader: Header,
    appExplorer: Explorer,
    appFooter: Footer,
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
