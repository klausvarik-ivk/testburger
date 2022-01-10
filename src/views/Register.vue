<template>
  <div id="app">
    <form @submit.prevent="login">
      <div>
        <label for="Username">Email</label>
        <input name="Username" v-model="email" placeholder="examble@examble.eu" />
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
      <input type="submit" value="Register" />
    </form>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    };
  },
  methods: {
    async login() {
      const { email, password, firstName, lastName } = this;
      const res = await fetch(
        "/api/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            firstName,
            lastName,
          }),
        }
      );
      const data = await res.json();
      console.log(data);
    },
  },
};
</script>
