<template>
  <v-container>
    <h3 class="name">Hi, {{ user.data.first_name }} {{ user.data.last_name }}</h3>
    <h3>Below are courses you can pick from</h3>
    <v-tabs>
      <v-tab to="/course">Videos</v-tab>
      <v-tab>PDF</v-tab>
    </v-tabs>
    <!-- <v-row align="center" justify="center" style="margin-bottom: 1rem; margin-top: 1rem">
      <v-col cols="12" md="4" class="flex">
        <v-list dense>
          <v-list-item>
            <v-list-item-content>
              <h3 class="course">HTML</h3>
              <h3 class="course">CSS</h3>
              <h3 class="course">NODE</h3>
              <h3 class="course">GIT</h3>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row> -->
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
    if (localStorage.getItem === null) {
      this.$router.push("/login");
    }

    // this.user = response.data;
    // console.log(response.data);
  },

  computed: {
    ...mapGetters(["user"]),
  },
};
</script>

<style scoped>
.course {
  font-size: 3rem;
}
/* .name {
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
} */
</style>
