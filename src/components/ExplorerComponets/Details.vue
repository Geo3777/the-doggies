<template>
  <div class="">
    <div class="row w-100 m-0 pt-3">
      <div class="col-md-6 col-sm-12 align-self-center ps-4">
        <h2 class="text-cinerous">Title and Owner</h2>
        <p class="lead text-mintCream textAlign">
          The Title is: {{ doggie.name }} and the owner is: {{ owner.owner }}
        </p>
        <h2 class="text-cinerous mt-4">Description</h2>
        <p class="lead text-mintCream textAlign">
          {{ doggie.description }}
        </p>
      </div>
      <div class="col-md-6 col-sm-12 align-self-center">
        <div
          class="d-flex justify-content-md-end justify-content-sm-center pe-3"
        >
          <div class="card w-75 bg-spaceCadet">
            <img v-bind:src="doggie.image_url" class="image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dogg: this.$store.doggie,
    };
  },
  computed: {
    doggie() {
      return this.$store.getters.getDoggie.doggie;
    },
    owner() {
      return this.$store.getters.getOwner;
    },
  },
};
</script>

<style scoped>
.textAlign {
  margin: 0;
  text-align: justify;
}
.image {
  display: block;
  object-fit: cover;
  height: 50vh;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  transition: 0.3s;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
