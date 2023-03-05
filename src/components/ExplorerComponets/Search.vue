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
            id="search"
            type="text"
            class="form-control bg-mistic border border-cinerous text-mintCream"
            placeholder="Token ID"
          />
        </div>
      </div>
      <button class="btn btn-cinerous mt-2 text-spaceCadet">Search</button>
      <button class="btn btn-cinerous mt-2 mb-4 text-spaceCadet">
        Search Random
      </button>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.customWidth {
  width: 400px;
}
</style>
