<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Sidemenu></Sidemenu>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Sidemenu from "@/components/Sidemenu.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Sidemenu,
  },
};
</script>
