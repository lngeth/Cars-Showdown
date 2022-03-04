<template>
  <div class="bg-light p-5 rounded col-md-4 col-lg-3 d-flex justify-content-center">
    <div class="">
      <div class="form-check form-switch">
        <label class="form-check-label" for="flexSwitchCheckDefault">
          <span v-if="mode">Mode sélection</span>
          <span v-else>Mode critères</span>
        </label>
        <input class="form-check-input" @click="changeMode" type="checkbox" role="switch" id="flexSwitchCheckDefault">
      </div>
      <div>
        <div class="fw-bold">Marque et modèle</div>
        <div v-for="brand in brands" :key="brand">
          <input type="checkbox" aria-label="Checkbox for following text input" :value="brand" v-model="checkedBrands">
          <label class="ms-2">{{brand}}</label>
        </div>
      </div>
      <div>
        <div class="fw-bold">Carburant</div>
        <div v-for="carburant in carburants" :key="carburant">
          <input type="checkbox" aria-label="Checkbox for following text input" :value="carburant" v-model="checkedCarburants">
          <label class="ms-2">{{carburant}}</label>
        </div>
      </div>
      <div>
        <div class="fw-bold">Boite de vitesse</div>
        <div v-for="vitesse in vitesses" :key="vitesse">
          <input type="checkbox" aria-label="Checkbox for following text input" :value="vitesse" v-model="checkedVitesses">
          <label class="ms-2">{{vitesse}}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "SideSearchBar",
  props: {
    brands: Array,
    carburants: Array,
    vitesses: Array,
  },
  data() {
    return {
      checkedBrands: [],
      checkedVitesses: [],
      checkedCarburants: [],
      mode: true
    }
  },
  watch: {
    checkedBrands(newChecked, oldChecked) {
      if (newChecked !== oldChecked) {
        this.$emit("addBrandsCriteria", JSON.parse(JSON.stringify(newChecked)))
      }
    },
    checkedVitesses(newChecked, oldChecked) {
      if (newChecked !== oldChecked) {
        this.$emit("addVitessesCriteria", JSON.parse(JSON.stringify(newChecked)))
      }
    },
    checkedCarburants(newChecked, oldChecked) {
      if (newChecked !== oldChecked) {
        this.$emit("addCarburantsCriteria", JSON.parse(JSON.stringify(newChecked)))
      }
    },
    mode(newMode, oldMode) {
      if (newMode !== oldMode) {
        this.$emit("changeMode", newMode)
      }
    }
  },
  methods: {
    changeMode() {
      this.mode = !this.mode
    }
  }
}
</script>

<style scoped>

</style>