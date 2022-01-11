<template>

<div class= "row burger-list"> 

          <div class="col-mb-3"
            v-for="burgers in BurgersromServer"
            :key="burgers"
            >
            <p> 
            {{ burgers.title }} {{ burgers.category}} {{ burgers.price }}€ {{ burgers.stock }} <img :src=" burgers.img " {{ burgers.featured }} />
            </p>
           </div>
</div>
</template>

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

  setup(){
    

      const BurgersFromServer = ref([]);
    async function getBurgersForUpdate() {
      const result = await axios.get("/api/update-burgers");
      BurgersFromServer.value = result.data.filter(result => result.featured === true);
      console.log(BurgersFromServer.value)
    }

getBurgersForUpdate();

  return {

getBurgersForUpdate,
BurgersFromServer,

  };

  },

};

  </script>