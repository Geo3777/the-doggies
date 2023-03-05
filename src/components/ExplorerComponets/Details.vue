<template>
  <div class="">
    <div class="row w-100 m-0 pt-3">
      <div class="col-md-6 col-sm-12 align-self-center ps-4">
        <h2 class="text-cinerous">Title and Owner</h2>
        <p class="lead text-mintCream">Lorem ipsum dolor sit amet.</p>
        <h2 class="text-cinerous">Description</h2>
        <p class="lead text-mintCream textAlign">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          reiciendis veniam excepturi quis placeat sed accusamus est quidem
          saepe. Voluptatibus.
        </p>
      </div>
      <div class="col-md-6 col-sm-12 align-self-center">
        <div
          class="d-flex justify-content-md-end justify-content-sm-center pe-3"
        >
          <div class="card w-75 bg-spaceCadet">
            <img
              src="https://static.onecms.io/wp-content/uploads/sites/34/2022/03/22/happy-labrador-retriever-getty-0322-2000.jpg"
              class="image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.textAlign {
  margin: 0;
  text-align: justify;
}
.image {
  display: block;
  object-fit: cover;
  height: 40vh;
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
