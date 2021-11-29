<template>
  <div class="row">
        <div class="col">
      <a href="#" data-bs-toggle="modal" data-bs-target="#kanalihaburgerid" @click="getBurgers(burger._id)">
        <img class="menu-image" src="../../img/sale2.jpg" />
        <p>Kanaliha burgerid</p>
        <ul class="list-group mb-3">
          <li
            v-for="burgers in BurgersFromServer"
            :key="burger"
            class="list-group-item"
          >
            {{ burger.title }} {{ burger.price }}
          </li>
        </ul>
      </a>
<!-- Modal -->
<div class="modal fade" id="kanalihaburgerid" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Kanaliha burgerid
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

      </div>
      <div class="col">
      <a href="#" data-bs-toggle="modal" data-bs-target="#veiselihaburgerid">
        <img class="menu-image" src="../../img/sale1.jpg" />
        <p>Veiseliha burgerid</p>
      </a>

<!-- Modal -->
<div class="modal fade" id="veiselihaburgerid" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Veiseliha burgerid
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

      </div>
      <div class="col">
      <a href="#" data-bs-toggle="modal" data-bs-target="#kalaburgerid" >
        <img class="menu-image" src="#" alt="" />
      <p>Kala burgerid</p>
      </a>

<!-- Modal -->
<div class="modal fade" id="kalaburgerid" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Kala burgerid
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

    </div>
          <div class="col">
      <a href="#"  data-bs-toggle="modal" data-bs-target="#veganburgerid" >
        <img class="menu-image" src="../../img/sale3.jpg" alt="" />
      <p>Vegan burgerid</p>
      </a>

<!-- Modal -->
<div class="modal fade" id="veganburgerid" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       Vegan burgerid
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

    </div>
          <div class="col">
      <a href="#" data-bs-toggle="modal" data-bs-target="#sealihaburgerid">
        <img class="menu-image" src="../../img/sale4.jpg" alt="" />
      <p>Sealiha burgerid</p>
      </a>

<!-- Modal -->
<div class="modal fade" id="sealihaburgerid" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          Sealiha burgerid
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
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
    title: String,
    price: Number,
  },

setup() {
    const BurgersFromServer = ref([]);

    async function getBurgers() {
      const result = await axios.get("/api/get-burgers");
      BurgersFromServer.value = result.data;
      console.log(result.data);
    }

    getBurgers();

return {
    getBurgers,
    BurgersFromServer,
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
