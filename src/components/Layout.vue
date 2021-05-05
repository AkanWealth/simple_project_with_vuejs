<template>
  <v-app>
    <top-bar @open-drawer="drawer = !drawer" />
    <drawer-menu v-model="drawer" />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
import TopBar from "./TopBar.vue";
import DrawerMenu from "./DrawerMenu.vue";
import axios from "axios";

export default {
  name: "Layout",
  components: {
    DrawerMenu,
    TopBar,
  },
  data() {
    return {
      drawer: false,
    };
  },
  async created() {
    const response = await axios.get("user");
    this.$store.dispatch("user", response.data);

    // this.user = response.data;
    console.log(response.data);
  },
};
</script>
