<template>

<div class="up">
<a href="/updateBurger">Uuenda burgereid</a>
</div>
    <div class="d-flex justify-content-center">
        <div class="col-6">
           <label for="Title">Burgeri nimi</label>
        <input name="Title" v-model="title" placeholder="Nt: Kanaburger S" />
           
        </div>
    </div>
    <div class="d-flex justify-content-center">
        <div class="col-6">
            <label for="Category">Kategooria</label>
        <input name="Category" v-model="category" placeholder="Nt: Kana, Kala jne" />
        </div>
    </div>
    <div class="d-flex justify-content-center">
        <div class="col-6">
            <label for="Price">Hind</label>
        <input name="Price" v-model="price" placeholder="Nt: 5.2" />
        </div>
    </div>
    <div class="d-flex justify-content-center">
        <div class="col-6">
           <label for="Stock">Laoseis</label>
        <input name="Stock" v-model="stock" placeholder="Nt: 1" />
        </div>
    </div>
    <div class="d-flex justify-content-center">
        <div class="col-6">
         <label for="img">Pilt</label>
                <input name="img" v-model="img" placeholder="Nt: ../../img/pilt1.jpg"> 
        </div>
    </div>
    <div class="d-flex justify-content-center">
        <div class="col-6">
             <label for="Featured">Featured</label>
        <input name="Featured" v-model="featured" placeholder="Nt: false, true" />
        <div class="add">
            <button type="button" @click="addBurger" class="btn btn-primary">
                Lisa burger
              </button>
        </div>
    </div>
</div>
</template>

<style scoped>

.centered-input input {
  text-align: center;
}
.up {
    padding: 50px;
}
.add {
    text-align:center;
    padding:50px;
}
</style>

<script>
export default {
  name: "addBurger",
  data() {
    return {
      title: "",
      category: "",
      price: "",
      stock: "",
      img: "",
      featured: "",

    };
  },
  methods: {
    async addBurger() {
      const { title, category, price, stock, img, featured } = this;
      const res = await fetch(
        "/api/add-burgers",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
              title,
            category,
            price,
            stock,
            img,
            featured,
          }),
        }
      );
      const data = await res.json();
      console.log(data);
    },
  },
};
</script>
