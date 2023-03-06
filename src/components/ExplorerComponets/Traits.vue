<template>
  <div class="mt-3 d-flex justify-content-center w-100 mt-4">
    <div class="w-75">
      <table
        class="table table-hover bg-cinerous border border-spaceCadet text-spaceCadet text-center lead"
      >
        <tbody>
          <tr v-for="(doggie, index) in doggies" v-bind:key="index">
            <td>{{ doggie.trait_type }}</td>
            <td>{{ doggie.value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    doggies() {
      return this.$store.getters.getDoggie.doggie.attributes;
    },
  },
};
</script>

<style scoped></style>
