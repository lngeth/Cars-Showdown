<template>
  <div class="col-md-12 col-lg-6 col-xl-4 mt-3">
    <div class="card w-100" id="carCard">
      <img :src="getImgURL(URL)" class="card-img-top" :alt="title">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{carburant}} | {{vitesse}} | {{annee}}</p>
        <hr>
        <router-link :to="{name: 'car', params: {id: id} }" class="text-primary text-decoration-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
          </svg>
          <span> En savoir plus</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarCard",
  props: [
    'id',
    'title',
    'carburant',
    'vitesse',
    'annee',
    'URL',
  ],
  methods: {
    getImgURL(URL) {
      return require('@/assets/img/'+URL);
    }
  }
}
</script>

<style scoped>
  #carCard {
    width: 18rem;
  }
</style>