<template>
  <v-container>
    <h3 class="name">Hi, {{ user.data.first_name }} {{ user.data.last_name }}</h3>
    <v-row align="center" justify="center" style="margin-bottom: 1rem; margin-top: 1rem">
      <v-col cols="12" md="4" class="flex">
        <v-card-text class="mt-12">
          <v-btn to="/view-course" x-large class="course" outlined height="5rem"
            >CSS</v-btn
          >
          <!-- <p class="course">CSS</p> -->
        </v-card-text>
        <v-card-text class="mt-12">
          <v-btn x-large class="course" outlined height="5rem">GIT</v-btn>
        </v-card-text>
      </v-col>
      <v-col cols="12" md="4" class="flex">
        <v-card-text class="mt-12">
          <v-btn x-large class="course" outlined height="5rem">HTML</v-btn>
        </v-card-text>
        <v-card-text class="mt-12">
          <v-btn x-large class="course" outlined height="5rem">NODE</v-btn>
        </v-card-text>
      </v-col>
      <!-- <v-col cols="6" md="4">
      </v-col> -->
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "Course",

  async created() {
    const response = await axios.get("user");

    this.$store.dispatch("user", response.data);

    // this.user = response.data;
    // console.log(response.data);
  },

  computed: {
    ...mapGetters(["user"]),
  },
};
</script>

<style scoped>
.name {
  font-size: 2rem;
}
.mt-12 {
  padding: 4rem;
}
.course {
  font-size: 1.3rem;
  text-decoration: none;
}
@media (max-width: 1024px) {
  .course {
    font-size: 1rem;
  }
}
</style>
