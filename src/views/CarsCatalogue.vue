<template>
    <div class="container-fluid d-md-flex justify-content-center mt-5 w-75">
      <div class="row">
        <SideSearchBar @addBrandsCriteria="addBrandsCriteria"
                       @addVitessesCriteria="addVitessesCriteria"
                       @addCarburantsCriteria="addCarburantsCriteria"
                       @changeMode="changeMode"
                       :brands="brands" :carburants="carburants" :vitesses="vitesses" />
        <div class="p-3 col-md-8 col-lg-9">
          <div>
            <h1>Retrouver les voitures selon vos critères </h1>
            <h2>{{datas.length}} véhicules trouvés</h2>
            <p class="fst-italic">Pour plus d'informations sur un véhicule, cliquer sur le lien en dessous.</p>
          </div>
          <div class="d-flex justify-content-center">
            <div class="row">
              <CarCard v-for="car in datas" :key="car.id"
                       :id="car.id"
                       :title="car.marque + ' ' + car.model"
                       :carburant="car.carburant"
                       :vitesse="car.vitesse"
                       :annee="car.annee"
                       :URL="car.URL"/>
              <template v-if="datas.length === 0">
                <h3>Aucun résultat, changer vos critères.</h3>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import SideSearchBar from "@/components/SideSearchBar";
import CarCard from "@/components/CarCard";
import axios from "axios"

export default {
  name: "CarsCatalogue",
  components: {
    SideSearchBar,
    CarCard,
  },
  data() {
    return {
      datas: [],
      brands: [],
      vitesses: [],
      carburants: [],
      selectedCriteria: {
        marque: [],
        vitesse: [],
        carburant: [],
      },
      modeAffichage: true,
    }
  },
  watch: {
    'selectedCriteria.marque'(newTab, oldTab) {
      if (newTab != oldTab) {
        if (this.modeAffichage) {
          this.getAllCriterias()
        }
        else {
          this.refreshByCriteria()
        }
      }
    },
    'selectedCriteria.vitesse'(newTab, oldTab) {
      if (newTab != oldTab) {
        if (this.modeAffichage)
          this.getAllCriterias()
        else
          this.refreshByCriteria()
      }
    },
    'selectedCriteria.carburant'(newTab, oldTab) {
      if (newTab != oldTab) {
        if (this.modeAffichage)
          this.getAllCriterias()
        else
          this.refreshByCriteria()
      }
    },
    datas(newTab) {
      if (newTab.length === 0 && this.modeAffichage) {
        this.getAllCars()
      }
    }
  },
  async created() {
    try {
      let res = await axios.get(`http://localhost:3000/cars`);
      this.datas = res.data;
      res = await axios.get(`http://localhost:3000/marques`);
      this.brands = res.data;
      res = await axios.get(`http://localhost:3000/vitesses`);
      this.vitesses = res.data;
      res = await axios.get(`http://localhost:3000/carburants`);
      this.carburants = res.data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    addBrandsCriteria(e) {
      this.selectedCriteria.marque = e;
    },
    addVitessesCriteria(e) {
      this.selectedCriteria.vitesse = e;
    },
    addCarburantsCriteria(e) {
      this.selectedCriteria.carburant = e;
    },
    async refreshByCriteria() {
      const res = await axios.get(`http://localhost:3000/cars`);
      let newDatas = res.data;

      newDatas = newDatas.filter(car => {
        for (let criteria in this.selectedCriteria) {
          //console.log(this.selectedCriteria[criteria])
          for (let element in this.selectedCriteria[criteria]) {
            if (car[criteria] === undefined || car[criteria] !== this.selectedCriteria[criteria][element])
              return false
          }
        }
        return true
      })
      this.datas = newDatas
    },
    async getAllCriterias() {
      const res = await axios.get(`http://localhost:3000/cars`)
      let newDatas = []
      let tabToReturn = []

      for (let criteria in this.selectedCriteria) {
        for (let element in this.selectedCriteria[criteria]) {
          newDatas = res.data
          let tab = newDatas.filter(car => {
            if (car[criteria] === undefined || car[criteria] !== this.selectedCriteria[criteria][element])
              return false
            return true
          })

          tab.forEach(element => {
            let isInside = false
            tabToReturn.forEach(el => {
              if (el === element)
                isInside = true
            });
            if (!isInside) {
              tabToReturn.push(element)
            }
          });
        }
      }
      this.datas = tabToReturn
    },
    async getAllCars() {
      let res = await axios.get(`http://localhost:3000/cars`);
      this.datas = res.data;
    },
    changeMode(e) {
      this.modeAffichage = e
    }
  }
}
</script>