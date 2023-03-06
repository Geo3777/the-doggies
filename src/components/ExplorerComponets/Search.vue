<template>
  <div class="w-100 d-flex justify-content-center">
    <div class="d-flex flex-column customWidth">
      <div class="form-group row">
        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text bg-cinerous border border-cinerous">
              <font-awesome-icon
                icon="fa-solid fa-magnifying-glass"
                class="text-mistic"
                size="xl"
              />
            </div>
          </div>
          <input
            id="searchInput"
            type="text"
            class="form-control bg-mistic border border-cinerous text-mintCream"
            placeholder="Token ID"
            v-model="id"
          />
        </div>
      </div>
      <button @click="call" class="btn btn-cinerous mt-2 text-spaceCadet">
        Search
      </button>
      <button
        @click="callRandom"
        class="btn btn-cinerous mt-2 mb-4 text-spaceCadet"
        id="randomSearchBtn"
      >
        Search Random
      </button>
    </div>
  </div>
</template>

<script>
import { contract } from "../../repository/contract";
const getRandomId = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
export default {
  data() {
    return {
      id: null,
    };
  },
  methods: {
    call() {
      contract.methods
        .ownerOf(this.id)
        .call()
        .then((res) => {
          this.$store.dispatch({
            type: "setOwner",
            owner: res,
          });
        })
        .then(
          contract.methods
            .tokenURI(this.id)
            .call()
            .then((url) => {
              fetch(url)
                .then((res) => res.json())
                .then((out) => {
                  this.$store.dispatch({
                    type: "setDoggie",
                    doggie: out,
                  });
                  this.$store.dispatch({
                    type: "setFetched",
                    fetch: true,
                  });
                });
            })
        );
    },
    callRandom() {
      this.id = getRandomId(1, 10000);
      this.call();
    },
  },
};
</script>

<style scoped>
.customWidth {
  width: 400px;
}
</style>
