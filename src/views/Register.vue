<template>
  <div id="app">
    <form @submit.prevent="login">
      <div>
        <label for="Username">Username</label>
        <input name="Username" v-model="Username" placeholder="Username" />
      </div>
      <div>
        <label for="password">Password</label>
        <input
          name="password"
          v-model="password"
          placeholder="password"
          type="password"
        />
      </div>
      <div>
        <label for="FirstName">First name</label>
        <input name="FirstName" v-model="FirstName" placeholder="First name" />
      </div>
      <div>
        <label for="lastName">Last name</label>
        <input name="lastName" v-model="LastName" placeholder="last name" />
      </div>
      <div>
        <label for="address">Address</label>
        <input name="address" v-model="Address" placeholder="address" />
      </div>
      <input type="submit" value="Register" />
    </form>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
    };
  },
  methods: {
    async login() {
      const { username, password, firstName, lastName, age, address } = this;
      const res = await fetch(
        "https://SomberHandsomePhysics--five-nine.repl.co/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
            firstName,
            lastName,
            age,
            address,
          }),
        }
      );
      const data = await res.json();
      console.log(data);
    },
  },
};
</script>
