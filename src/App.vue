<template>
  <div id="container">
    <app-header id="header"></app-header>
    <app-explorer id="explorer"></app-explorer>
    <app-footer></app-footer>
  </div>
</template>

<script>
import { contract } from "./repository/contract";
import Header from "./components/Header.vue";
import Explorer from "./components/Explorer.vue";
import Footer from "./components/Footer.vue";
console.log(contract.methods);

export default {
  components: {
    appHeader: Header,
    appExplorer: Explorer,
    appFooter: Footer,
  },
  data() {
    return {};
  },
  methods: {},
  created() {
    contract.methods
      .tokenByIndex(1)
      .call()
      .then((result) => {
        console.log(result);
      });
  },
};
</script>

<style scoped></style>
