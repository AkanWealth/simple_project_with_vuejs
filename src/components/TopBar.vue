<template>
  <v-app-bar color="transparent" app flat dense absolute height="55rem">
    <v-app-bar-nav-icon @click="$emit('open-drawer')" style="margin-top: 0.5rem" />

    <v-toolbar-title
      ><router-link to="/" class="toolbar-title">Easy Class</router-link></v-toolbar-title
    >
    <v-spacer></v-spacer>
    <v-toolbar-items class="shrink mt-1 hidden-sm-and-down" v-if="!user">
      <router-link to="/" class="toolbar-item">Home</router-link>
      <router-link to="/about" class="toolbar-item">About</router-link>
      <router-link to="/contact" class="toolbar-item">Contact</router-link>
      <router-link to="/course" class="toolbar-item">Course</router-link>
      <router-link to="/login" class="toolbar-item">Login</router-link>
      <!-- <router-link to="/signup" class="toolbar-item">Sign Up</router-link> -->
    </v-toolbar-items>
    <v-toolbar-items class="shrink mt-1 hidden-sm-and-down" v-if="user">
      <router-link to="/add-course" class="toolbar-item">Add Course</router-link>
      <router-link to="/view-course" class="toolbar-item">View Course</router-link>
      <router-link to="/course" class="toolbar-item">Course</router-link>
      <a href="javascript:void(0)" class="toolbar-item" @click="logout">Logout</a>
    </v-toolbar-items>
  </v-app-bar>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "TopBar",
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$store.dispatch("user", null);
      this.$router.push("/");
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>
<style scoped>
.toolbar-item {
  padding: 20px;
  text-decoration: none;
  color: #2c3e50;
  font: bold;
  font-size: 1.3rem;
}
a.router-link-exact-active {
  color: #42b983;
}
.toolbar-title {
  color: #2c3e50;
  margin-top: 0.5rem;
  padding: 25px;
  font: bolder;
  font-size: 1.7rem;
  text-decoration: none;
}
</style>
