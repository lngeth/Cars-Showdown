<template>
  <div class="">
    <div style="position: relative">
      <h1 class="text-white mt-4" id="titleAccueil">Le monde de l'automobile a porté de tous</h1>
      <img id="img_accueil" src="@/assets/img/image_accueil.jpg" class="img-fluid" alt="image d'accueil">
    </div>
    <div class="container mt-3">
      <div class="row">
        <h2 class="text-uppercase">Voitures du moment</h2>
      </div>
      <div class="row">
        <CarCard id="1" title="Peugeot 5008" carburant="Diesel" vitesse="Automatique" annee="2018" URL="peugeot/Peugeot_5008_D_A_2018.jpg" />
        <CarCard id="2" title="Peugeot 3008" carburant="Diesel" vitesse="Automatique" annee="2020" URL="peugeot/Peugeot_3008_D_A_2020.jpg" />
        <CarCard id="3" title="Peugeot 2008" carburant="Diesel" vitesse="Manuel" annee="2019" URL="peugeot/Peugeot_2008_D_M_2019.jpg" />
      </div>
    </div>

    <div class="text-center mt-5">
      <span class="fw-bold">Plus de voitures ?</span>
      <router-link to="/cars" class="nav-link">Voir le catalogue</router-link>
    </div>
  </div>
</template>

<script>
import CarCard from "@/components/CarCard";

export default {
  name: "HomeView",
  components: {
    CarCard,
  }
}
</script>

<style scoped>
#img_accueil {
}

#titleAccueil {
  position: absolute; z-index: 1; margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;text-align: center;
}
</style>