<template>
<body>
  <div class="container">
    <div class="row menu">
      <Navbar />
    </div>
    <div class="row">
    <img class="banner" src="/img/ka-burx.jpg" alt="logo" />
    </div>
      <div class="row deals">
        <h1 class="font-weight-bold">Selle nädala pakkumised!</h1>
        <span class="mb-4"></span>
        <div class="col order-1">
          <div class="text-center">
            <img
              src="/img/sale1.jpg"
              class="rounded"
              alt="sale1"
              width="290"
              height="220"
            />
            <h3>Sealiha burger - L</h3>
            <p>X€</p>
          </div>
        </div>
        <div class="col order-2">
          <div class="text-center">
            <img
              src="/img/sale3.jpg"
              class="rounded"
              alt="sale3"
              width="250"
              height="220"
            />
            <h3>Vegan Burger - S</h3>
            <p>X€</p>
          </div>
        </div>
        <div class="col order-3">
          <div class="text-center">
            <img
              src="/img/sale2.jpg"
              class="rounded"
              alt="sale2"
              width="250"
              height="220"
            />
            <h3>Kana burger - M</h3>
            <p>X€</p>
          </div>
        </div>
        </div>
        <div class="footer">
      <Footer /> 
      </div>
  </div>
</body>
</template>

<style scoped>

body {
background-color: #FACFAD;
}

.banner {
  width: 1650px;
  height: 288px;
  padding: 0px;
}
.menu {
  background-color: #F8BD7F;
}

.deals {
  background-color: #F2AA7E;
}
</style>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Home",
  components: {
    Footer, 
    Navbar,
  },
};
</script>
