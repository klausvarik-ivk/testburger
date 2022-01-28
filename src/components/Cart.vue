<template>
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
</template>

<script>
import { ref } from "vue";


export default {
    name: "itemsList",
    props: {
        title: String,
        price: Number,
        itemsincart: String,
    },
    setup(){
        const shoppingList = ref("");


    
    return {
        shoppingList,

        
    };
    },
};

</script>
<style>

</style>