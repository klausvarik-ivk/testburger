<template>
  <div>
    <h1 class="text-center"><img src="../../img/ka-burx.jpg" alt="logo" /></h1>
    <header class="header">
      <nav class="navbar navbar-style">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#"
                    >Home</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Drinks</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Food</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Home Delivery</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </nav>
    </header>

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
    <section id="boxes"></section>
    <!-- <footer>
  <div class="container">
    <div class="row">
      <div class="col">
        <li class="col">Tel: 512 4564</li>
        <div class="col">
          <li class="col">Aadress: 123 Viljandi
          </div>
          <div class="col order-first">
            <ul class="group">
              <li class="group-item">Oleme Avatud</li>
              <li class="group-item">E-R 10-20</li>
              <li class="group-item">L-P 10-22</li>
            </ul> 
          </div>
        </div>
      </div>      
</footer> -->
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    //HelloWorld,
  },
};
</script>
