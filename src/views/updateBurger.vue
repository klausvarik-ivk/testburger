<template>
<body>
<div class="up">
   <a href="/admin">Lisa burgereid</a>
</div>
<div>
      <a href="#" data-bs-toggle="modal" data-bs-target="#sealihaburgerid" @click="getBurgers('Sea')">
        <h4>Sealiha burgerid</h4>
      </a>
 <div
        class="modal fade"
        id="sealihaburgerid"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Sealiha burgerid</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
                                         
                                         
       <ul class="list-group mb-3">
          <li
            v-for="burgers in BurgersFromServer"
            :key="burgers"
            class="list-group-item"
          >
          <div class="col-6">
           <label for="Title">Burgeri nimi</label>
        <input name="Title" v-model="burgers.title" /> 
      </div>
      <div class="col-6">
           <label for="Category">Kategooria</label>
        <input name="Category" v-model="burgers.category" /> 
      </div>
      <div class="col-6">
           <label for="Price">Hind</label>
        <input name="Price" v-model="burgers.price" /> 
      </div>
      <div class="col-6">
           <label for="Stock">Laoseis</label>
        <input name="Stock" v-model="burgers.stock" /> 
      </div>
      <div class="col-6">
           <label for="Img">Pilt</label>
        <input name="Img" v-model="burgers.img" /> 
      </div>
      <div class="col-6">
           <label for="Featured">Featured</label>
        <input name="Featured" v-model="burgers.featured" /> 
      </div>
            <button @click="updateBurger(burgers._id, 'Sea')">Update</button>
          </li>
        </ul>
              </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>


 <div class="col">
      <a
        href="#"
        data-bs-toggle="modal"
        data-bs-target="#kanalihaburgerid"
        @click="getBurgers('Kana')"
      >
        <h4>Kanaliha burgerid</h4>
      </a>
<div
        class="modal fade"
        id="kanalihaburgerid"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Kanaliha burgerid</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
<ul class="list-group mb-3">
          <li
            v-for="burgers in BurgersFromServer"
            :key="burgers"
            class="list-group-item"
          >
          <div class="col-6">
           <label for="Title">Burgeri nimi</label>
        <input name="Title" v-model="burgers.title" /> 
      </div>
      <div class="col-6">
           <label for="Category">Kategooria</label>
        <input name="Category" v-model="burgers.category" /> 
      </div>
      <div class="col-6">
           <label for="Price">Hind</label>
        <input name="Price" v-model="burgers.price" /> 
      </div>
      <div class="col-6">
           <label for="Stock">Laoseis</label>
        <input name="Stock" v-model="burgers.stock" /> 
      </div>
      <div class="col-6">
           <label for="Img">Pilt</label>
        <input name="Img" v-model="burgers.img" /> 
      </div>
      <div class="col-6">
           <label for="Featured">Featured</label>
        <input name="Featured" v-model="burgers.featured" /> 
      </div>
            <button @click="updateBurger(burgers._id, 'Kana')">Update</button>
          </li>
        </ul>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <!-- <button type="button" class="btn btn-primary" @click="getBurgers('Kana')"> -->
            </div>
          </div>
        </div>
      </div>
    </div>  

<div class="col">
      <a href="#" data-bs-toggle="modal" data-bs-target="#veiselihaburgerid" @click="getBurgers('Veise')">
        <h4>Veiseliha burgerid</h4>
      </a>
      <div
        class="modal fade"
        id="veiselihaburgerid"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel"> Veiseliha burgerid</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <ul class="list-group mb-3">
          <li
            v-for="burgers in BurgersFromServer"
            :key="burgers"
            class="list-group-item"
          >
          <div class="col-6">
           <label for="Title">Burgeri nimi</label>
        <input name="Title" v-model="burgers.title" /> 
      </div>
      <div class="col-6">
           <label for="Category">Kategooria</label>
        <input name="Category" v-model="burgers.category" /> 
      </div>
      <div class="col-6">
           <label for="Price">Hind</label>
        <input name="Price" v-model="burgers.price" /> 
      </div>
      <div class="col-6">
           <label for="Stock">Laoseis</label>
        <input name="Stock" v-model="burgers.stock" /> 
      </div>
      <div class="col-6">
           <label for="Img">Pilt</label>
        <input name="Img" v-model="burgers.img" /> 
      </div>
      <div class="col-6">
           <label for="Featured">Featured</label>
        <input name="Featured" v-model="burgers.featured" /> 
      </div>
            <button @click="updateBurger(burgers._id, 'Veise')">Update</button>
          </li>
        </ul>
              </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"              
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

       <div class="col">
      <a href="#" data-bs-toggle="modal" data-bs-target="#kalaburgerid" @click="getBurgers('Kala')">
        <h4>Kala burgerid</h4>
      </a>
<div
        class="modal fade"
        id="kalaburgerid"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Kala burgerid</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
                            <ul class="list-group mb-3">
          <li
            v-for="burgers in BurgersFromServer"
            :key="burgers"
            class="list-group-item"
          >
          <div class="col-6">
           <label for="Title">Burgeri nimi</label>
        <input name="Title" v-model="burgers.title" /> 
      </div>
      <div class="col-6">
           <label for="Category">Kategooria</label>
        <input name="Category" v-model="burgers.category" /> 
      </div>
      <div class="col-6">
           <label for="Price">Hind</label>
        <input name="Price" v-model="burgers.price" /> 
      </div>
      <div class="col-6">
           <label for="Stock">Laoseis</label>
        <input name="Stock" v-model="burgers.stock" /> 
      </div>
      <div class="col-6">
           <label for="Img">Pilt</label>
        <input name="Img" v-model="burgers.img" /> 
      </div>
      <div class="col-6">
           <label for="Featured">Featured</label>
        <input name="Featured" v-model="burgers.featured" /> 
      </div>
            <button @click="updateBurger(burgers._id, 'Kala')">Update</button>
          </li>
        </ul>
              </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div> 

<div class="col">
      <a href="#" data-bs-toggle="modal" data-bs-target="#veganburgerid" @click="getBurgers('Vegan')">
        <h4>Vegan burgerid</h4>
      </a>
<div
        class="modal fade"
        id="veganburgerid"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Vegan burgerid</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
                            <ul class="list-group mb-3">
          <li
            v-for="burgers in BurgersFromServer"
            :key="burgers"
            class="list-group-item"
          >
            <div class="col-6">
           <label for="Title">Burgeri nimi</label>
        <input name="Title" v-model="burgers.title" /> 
      </div>
      <div class="col-6">
           <label for="Category">Kategooria</label>
        <input name="Category" v-model="burgers.category" /> 
      </div>
      <div class="col-6">
           <label for="Price">Hind</label>
        <input name="Price" v-model="burgers.price" /> 
      </div>
      <div class="col-6">
           <label for="Stock">Laoseis</label>
        <input name="Stock" v-model="burgers.stock" /> 
      </div>
      <div class="col-6">
           <label for="Img">Pilt</label>
        <input name="Img" v-model="burgers.img" /> 
      </div>
      <div class="col-6">
           <label for="Featured">Featured</label>
        <input name="Featured" v-model="burgers.featured" /> 
      </div>
            <button @click="updateBurger(burgers._id, 'Vegan')">Update</button>
          </li>
        </ul>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</body>
</template>

<style scoped>

body {
padding: 50px;
}
.up {
  padding: 50px;
}
</style>

<script> 

import { ref } from "vue";
import axios from "axios";

export default {
  name: "burgers",
  props: {
    title: String,
    category: String,
    price: Number,
    stock: String,
    img: String,
    featured: Boolean,
  }, 

setup() {
    const BurgersFromServer = ref([]);
    async function getBurgers(catburger) {
      const result = await axios.get("/api/get-burgers");
      BurgersFromServer.value = result.data.filter(result => result.category === catburger);
      console.log(BurgersFromServer);
    }

      const FeaturedFromServer = ref([]);
    async function getFeatured() {
      const result = await axios.get("/api/get-burgers");
      FeaturedFromServer.value = result.data.filter(result => result.featured === true);
      console.log(FeaturedFromServer.value)
    }


      async function updateBurger(
      id,
      title,
      category,
      price,
      stock,
      img,
      featured
    ) {
      console.log(id);
      await axios.patch(
        "/api/update-burger/:id" + id,
        {
          title: title,
        },
        {
          category: category,
        },
        {
          price: price,
        },
        {
          stock: stock,
        },
        {
          img: img,
        },
        {
          featured: featured,
        }
      );
    }

    return {
      getBurgers,
      BurgersFromServer,
      getFeatured,
      FeaturedFromServer,
      updateBurger,
    };
  },
};
</script>