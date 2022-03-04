<template>
  <div id="carView" class="container mt-5">
    <div class="row">
      <div class="col-md-5 d-flex align-items-center">
        <img :src="require('@/assets/img/'+URL)" class="rounded img-fluid w-100" :alt="marque">
      </div>
      <div class="col-md-7 mt-5 mt-md-1">
        <div class="border border-secondary rounded p-5">
          <h1 class="text-center">{{marque}} {{model}}</h1>
          <div class="mt-5">
            <p><span class="fw-bold">Type de carburant :</span> {{carburant}}</p>
            <p><span class="fw-bold">Boitier de vitesse :</span> {{vitesse}}</p>
            <p><span class="fw-bold">Année du modèle :</span> {{annee}}</p>
            <p><span class="fw-bold">Description :</span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur cumque deserunt laboriosam mollitia nostrum optio quaerat repellendus velit? Alias deleniti enim fugiat id laboriosam magni quia repellendus tempora, vel.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <router-link to="/cars" class="text-primary text-decoration-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg><span> Retour au catalogue</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CarView",
  props: [
      'id'
  ],
  data() {
    return {
      marque: '',
      model: '',
      carburant: '',
      vitesse: '',
      annee: '',
      URL: '',
    }
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:3000/cars?id=`+this.$route.params.id)
      const carInfo = res.data[0]
      for (let info in carInfo) {
        //console.log(`${carInfo[info]}`)
        switch (`${info}`) {
          case 'marque':
            this.marque = `${carInfo[info]}`
            break
          case 'model':
            this.model = `${carInfo[info]}`
            break
          case 'carburant':
            this.carburant = `${carInfo[info]}`
            break
          case 'vitesse':
            this.vitesse = `${carInfo[info]}`
            break
          case 'annee':
            this.annee = `${carInfo[info]}`
            break
          case 'URL':
            this.URL = `${carInfo[info]}`
            console.log(this.URL)
            break
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
}
</script>

<style scoped>
#carView {
  min-height: 70vh;
}
</style>