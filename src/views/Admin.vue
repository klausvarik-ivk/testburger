<template>

<div>
<a href="/updateBurger">Uuenda burgereid</a>
</div>
    <div class="d-flex justify-content-center">
        <div class="col-6">
           <label for="Title">Burgeri nimi</label>
        <input name="Title" v-model="Title" placeholder="Burgeri nimi" />
           
        </div>
    </div>
    <div class="d-flex justify-content-center">
        <div class="col-6">
            <label for="Category">Kategooria</label>
        <input name="Category" v-model="Category" placeholder="Kategooria" />
        </div>
    </div>
    <div class="d-flex justify-content-center">
        <div class="col-6">
            <label for="Price">Hind</label>
        <input name="Price" v-model="Price" placeholder="Hind" />
        </div>
    </div>
    <div class="d-flex justify-content-center">
        <div class="col-6">
           <label for="Stock">Laoseis</label>
        <input name="Stock" v-model="Stock" placeholder="Laoseis" />
        </div>
    </div>
    <div class="d-flex justify-content-center">
        <div class="col-6">
         <label for="img">Pilt</label>
                <input name="img" @change="onFileSelected"> 
            <button @click="onUpload"> Lae üles</button>
             
        </div>
    </div>
    <div class="d-flex justify-content-center">
        <div class="col-6">
             <label for="Featured">Featured</label>
        <input name="Featured" v-model="Stock" placeholder="Featured" />
        <div class="col-6">
            <button type="button" @click="addBurger" class="btn btn-primary">
                Lisa burger
              </button>
        </div>
    </div>
</div>
</template>

<style scoped>

.centered-input input {
  text-align: center
}
</style>

<script>
// import { defineComponent } from "vue"
// import { ref } from "vue";
// import axios from "axios";

//export default defineComponent({
   // setup() {
  // const burgers = ref("");
  // const newBurger = ref("");

 //  async function addBurger() {
  //      const { data } = await axios.post("/api/admin", {
   //         title: title.value,
  //          category: category.value,
  //          price: price.value,
 //           stock: stock.value,
  //          img: img.value,
 //           featured: featured.value,
  //   });
  //   }
  //   return {
 //     title,
  //    category,
   //   price,
  //    stock,
   //   img,
   //   featured,
 //     addBurger,

 //   };
 //   }
// })
// 
</script>
