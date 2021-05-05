<template>
  <v-container>
    <h3 v-if="user">
      Hi, {{ user.data.first_name }} {{ user.data.last_name }}
    </h3>
    <h3 v-if="!user">You are not logged in</h3>
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