<template>
  <h3>Hello</h3>
</template>

<script>
import axios from "axios";
export default {
  name: "Dashboard",
  async created() {
    const response = await axios.get("dashboard");
    console.log(response);
  },
};
</script>

<style>
</style>