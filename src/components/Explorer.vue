<template>
  <div class="container-fluid bg-spaceCadet pt-4 pb-4">
    <div class="container d-flex flex-column w-75">
      <div class="card bg-spaceCadetLight pb-4 pt-2">
        <app-title></app-title>
        <app-search></app-search>
      </div>
      <hr class="border border-1 border-cinerous" />
      <div
        v-if="isFetched"
        class="card bg-spaceCadetLight pt-2 pb-2 mb-2"
        id="results"
      >
        <app-details></app-details>
        <app-traits></app-traits>
      </div>
      <div v-if="isFetched === false" class="filler"></div>
    </div>
  </div>
</template>

<script>
import Title from "./ExplorerComponets/Title.vue";
import Search from "./ExplorerComponets/Search.vue";
import Details from "./ExplorerComponets/Details.vue";
import Traits from "./ExplorerComponets/Traits.vue";
export default {
  components: {
    appTitle: Title,
    appSearch: Search,
    appDetails: Details,
    appTraits: Traits,
  },
  computed: {
    isFetched() {
      return this.$store.getters.getIsFetched;
    },
  },
};
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  transition: 0.3s;
}
.filler {
  height: 500px;
}
</style>
