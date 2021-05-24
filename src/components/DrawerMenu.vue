<template>
  <v-navigation-drawer :value="value" app @input="$emit('input', $event)">
    <v-list dense>
      <v-list-item
        class="btn"
        v-for="(item, index) in menu"
        :key="index"
        :to="item.link"
        link
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: "DrawerMenu",
  props: {
    value: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  data: () => ({
    menu: [
      {
        name: "Home",
        link: "/",
        icon: "mdi-home",
      },
      {
        name: "About",
        link: "/about",
        icon: "mdi-book",
      },
      {
        name: "Login",
        link: "/login",
        icon: "mdi-account-circle",
      },
      {
        name: "Sign Up",
        link: "/signup",
        icon: "mdi-account-plus",
      },
      {
        name: "Contact",
        link: "/contact",
        icon: "mdi-email",
      },
    ],
  }),
};
</script>
<style scoped>
.btn {
  text-decoration: none;
}
</style>
