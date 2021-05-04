<template>
  <v-app-bar color="transparent" app flat dense absolute height="55rem">
    <v-app-bar-nav-icon @click="$emit('open-drawer')" />
    <v-toolbar-title>Simple Project</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="shrink mt-1 hidden-sm-and-down">
      <!-- <router-link to="/" class="toolbar-item">Home</router-link> -->
      <v-btn text to="/">home</v-btn>
      <v-btn text to="/about">about</v-btn>
      <v-btn text to="/contact">contact</v-btn>
      <v-btn text to="/login">login</v-btn>
      <v-btn text to="/signup">sign up</v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>
<script>
export default {
  name: "TopBar",
};
</script>
<style scoped>
</style>
