<template>
  <div class="row">
    <div class="col">
      
      <a
        href="#"
        data-bs-toggle="modal"
        data-bs-target="#kanalihaburgerid"
        @click="getBurgers('Kana')"
      >
        <!-- <img class="menu-image" src="../../img/sale2.jpg" @click="getBurgers('Kana')"/> -->

        <img class="menu-image" src="/img/sale2.jpg"/>
        <p>Kanaliha burgerid</p>
      </a>
      <!-- Modal -->
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
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Kanaliha burgerid
<ul class="list-group mb-3">
          <li
            v-for="burgers in BurgersFromServer"
            :key="burgers"
            class="list-group-item"
          >
            {{ burgers.title }} {{ burgers.price }}€ {{ burgers.stock }} in stock image url: <img :src=" burgers.img  " />
            <button @click="deleteBurger(burgers._id, 'Kana')">Delete</button>
            <button @click="addToCart(burgers._id, burgers.title, burgers.price)">Add to Cart</button>
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
                <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <a href="#" data-bs-toggle="modal" data-bs-target="#veiselihaburgerid" @click="getBurgers('Veise')">
        <img class="menu-image" src="/img/sale1.jpg" />
        <p>Veiseliha burgerid</p>
      </a>

      <!-- Modal -->
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
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Veiseliha burgerid
              <ul class="list-group mb-3">
          <li
            v-for="burgers in BurgersFromServer"
            :key="burgers"
            class="list-group-item"
          >
            {{ burgers.title }} {{ burgers.price }}€ {{ burgers.stock }} in stock image url: <img :src=" burgers.img  " />
            <button @click="deleteBurger(burgers._id, 'Veise')">Delete</button>
            <button @click="addToCart(burgers._id, burgers.title, burgers.price)">Add to Cart</button>
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
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <a href="#" data-bs-toggle="modal" data-bs-target="#kalaburgerid" @click="getBurgers('Kala')">
        <img class="menu-image" src="/img/kala150.jpg" alt="" />
        <p>Kala burgerid</p>
      </a>

      <!-- Modal -->
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
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Kala burgerid
                            <ul class="list-group mb-3">
          <li
            v-for="burgers in BurgersFromServer"
            :key="burgers"
            class="list-group-item"
          >
            {{ burgers.title }} {{ burgers.price }}€ {{ burgers.stock }} in stock image url: <img :src=" burgers.img  " />
            <button @click="deleteBurger(burgers._id, 'Kala')">Delete</button>
            <button @click="addToCart(burgers._id, burgers.title, burgers.price)">Add to Cart</button>
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
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <a href="#" data-bs-toggle="modal" data-bs-target="#veganburgerid" @click="getBurgers('Vegan')">
        <img class="menu-image" src="/img/sale3.jpg" alt="" />
        <p>Vegan burgerid</p>
      </a>

      <!-- Modal -->
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
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Vegan burgerid
                            <ul class="list-group mb-3">
          <li
            v-for="burgers in BurgersFromServer"
            :key="burgers"
            class="list-group-item"
          >
            {{ burgers.title }} {{ burgers.price }}€ {{ burgers.stock }} in stock image url: <img :src=" burgers.img  " />
            <button @click="deleteBurger(burgers._id, 'Vegan')">Delete</button>
            <button @click="addToCart(burgers._id, burgers.title, burgers.price)">Add to Cart</button>
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
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <a href="#" data-bs-toggle="modal" data-bs-target="#sealihaburgerid" @click="getBurgers('Sea')">
        <img class="menu-image" src="/img/sale4.jpg" alt="" />
        <p>Sealiha burgerid</p>
      </a>

      <!-- Modal -->
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
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Sealiha burgerid
                                          <ul class="list-group mb-3">
          <li
            v-for="burgers in BurgersFromServer"
            :key="burgers"
            class="list-group-item"
          >
            {{ burgers.title }} {{ burgers.price }}€ {{ burgers.stock }} in stock image url: <img :src=" burgers.img  " />
            <button @click="deleteBurger(burgers._id, 'Sea')">Delete</button>
            <button @click="addToCart(burgers._id, burgers.title, burgers.price)">Add to Cart</button>
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
    <a href="#" data-bs-toggle="modal" data-bs-target="#shoppingcart">
        <p>Shopping Cart</p>
      </a>
        <div
        class="modal fade"
        id="shoppingcart"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Shopping Cart</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Shopping Cart
              <ul class="list-group mb-3">
                <li
                    v-for="items in shoppingList"
                    :key="items"
                    class="list-group-item"
                >
                {{ items.title }}, Price: {{items.price}}, In Cart: {{items.ammount}}
                <button @click="deleteItemFromCart(item._id)">Delete</button>
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
    </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";




export default {
    name: "burgers", 
    props: {
        id: String,
        title: String,
        price: Number,
        stock: Number,
        img: String,
        ammount: Number,
    },
    setup() {
        const BurgersFromServer = ref([]);
        const shoppingList = ref([]);
        async function getBurgers(catburger) {
            const result = await axios.get("/api/get-burgers");
            BurgersFromServer.value = result.data.filter(result => result.category === catburger);
            console.log(BurgersFromServer);
        }
        const FeaturedFromServer = ref([]);
        async function getFeatured() {
            const result = await axios.get("/api/get-burgers");
            FeaturedFromServer.value = result.data.filter(result => result.featured === true);
            console.log(FeaturedFromServer.value);
        }
        async function deleteBurger(id, catburger) {
            await axios.get("/api/delete-burger/" + id);
            getBurgers(catburger);
        }
        async function addToCart(id, name, price) {
            let incart = 1
            const data = {id: id, title: name, price: price, ammount: incart}
            console.log(shoppingList.value.some(item =>item.id === id))
            
            if(shoppingList.value.some(item =>item.id === id)){
              const index = shoppingList.value.findIndex(item => item.id === id)
              console.log(shoppingList.value[index].ammount)
              let add = shoppingList.value[index].ammount + 1
              const newItem = {
                ...shoppingList.value[index],
                ammount: add
              }
              const newArray = [
                ...shoppingList.value.slice(0, index),
                newItem,
                ...shoppingList.value.slice(index)
              ]
              console.log(newArray);
              //shoppingList.value.push(id, name, " Price: ", price, " in Cart:", incart);
              //uuenda et incart +1
            }
            else{
              shoppingList.value.push(data);
            } 
            console.log(shoppingList.value)
        
        }
        function deleteItemFromCart(id){
          console.log(id);
        }
        return {
            getBurgers,
            BurgersFromServer,
            getFeatured,
            FeaturedFromServer,
            deleteBurger,
            addToCart,
            shoppingList,
            deleteItemFromCart,
            
        };
    },
};
</script>

<style scoped>
.menu-image {
  height: 75px;
  width: 75px;
}
</style>
