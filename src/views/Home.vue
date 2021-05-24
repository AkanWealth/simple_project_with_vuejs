<template>
  <v-container>
    <h1 class="text-center display-1">Welcome To Easy Class</h1>
    <h4 class="text-center">
      Here in Easy class we give free Programming materials, to ease your journey into web
      development.
    </h4>
    <v-row align="center" justify="center" style="margin-bottom: 1rem; margin-top: 1rem">
      <v-col cols="12" md="8">
        <v-card-text class="mt-12">
          <v-form>
            <v-text-field
              label="Search for course..."
              v-model="search"
              name="Search"
              :rules="searchRules"
              prepend-icon="mdi-search"
              type="text"
              color="teal accent-3"
              width="50rem"
            />
          </v-form>
        </v-card-text>
        <!-- <div class="text-center mt-3">
          <v-btn rounded color="teal accent-3" dark @click="find">Search</v-btn>
        </div> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {
      search: "",
    };
  },

  computed: {
    searchRules() {
      return [(v) => (v && v.length >= 2) || "Course must be at least 2 character long "];
    },
    filteredList() {
      return this.postList.filter((post) => {
        return post.title.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
};
</script>

<style></style>
