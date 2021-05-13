<template>
  <v-container>
    <h3>Hi, {{ user.data.first_name }} {{ user.data.last_name }}</h3>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Dashboard",
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>

<style>
</style>