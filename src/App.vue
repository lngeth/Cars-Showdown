<template>
  <NavBar />
  <router-view id="mainBody"></router-view>
  <FooterBar />
</template>

<script>
import NavBar from "@/components/NavBar";
import FooterBar from "@/components/FooterBar";

export default {
  name: 'App',
  components:{
    NavBar,
    FooterBar,
  }
}
</script>

<style scoped>
#mainBody {
  min-height: calc(100vh - 150px);
}
</style>
