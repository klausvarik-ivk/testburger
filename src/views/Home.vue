<template>
  <div class="container">
    <div class="row">
      <Navbar />
    </div>
    <h1 class="text-center"><img src="../../img/ka-burx.jpg" alt="logo" /></h1>

    <from id="newsletter">
      <div class="container">
        <h2 class="text-center"><img src="../../img/sale.jpg" alt="logo" /></h2>
      </div>
    </from>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="text-center">
            <img
              src="../../img/sale1.jpg"
              class="rounded"
              alt="sale1"
              width="290"
              height="220"
            />
            <h3>Large Meal</h3>
            <p>7.99€</p>
          </div>
        </div>
        <div class="col order-5">
          <div class="text-center">
            <img
              src="../../img/sale3.jpg"
              class="rounded"
              alt="sale3"
              width="250"
              height="220"
            />
            <h3>Vegan Burger</h3>
            <p>7.99€</p>
          </div>
        </div>
        <div class="col order-1">
          <div class="text-center">
            <img
              src="../../img/sale2.jpg"
              class="rounded"
              alt="sale2"
              width="250"
              height="220"
            />
            <h3>Double Cheese Burger</h3>
            <p>5.99€</p>
          </div>
        </div>
      </div>
    </div>
    <section id="boxes">
      <Footer /> 
    </section>
  </div>
</template>

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
