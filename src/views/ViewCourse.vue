<template>
  <v-container>
    <h1>hello</h1>
    <v-card-text class="mt-12">
      <h4 class="text-center mt-4">Post course here</h4>
      <div class="error" type="error" v-html="error" style="color: #fff" />
      <v-form>
        <v-text-field
          label="Title"
          v-model="title"
          name="Title"
          prepend-icon="mdi-account"
          type="text"
          color="teal accent-3"
        />
        <v-text-field
          label="Description"
          v-model="description"
          name="Description"
          prepend-icon="mdi-account"
          type="text"
          color="teal accent-3"
        />
        <v-text-field
          label="Instructor"
          v-model="instructor"
          name="Instructor"
          type="text"
          color="teal accent-3"
          prepend-icon="mdi-email"
        />
        <div class="text-center mt-3">
          <v-btn rounded color="teal accent-3" dark @click="course" id="btn"
            >Submit</v-btn
          >
        </div>
      </v-form>
    </v-card-text>
    <!-- <h3>Hi, {{ course.data }}</h3> -->
    <div class="course" v-if="course">
      <ul>
        <li v-for="course in course" :key="course.id">
          <div id="course-div">
            <p>Title: {{ course.title }}</p>
            <p>Write up: {{ course.description }}</p>
            <p>Written By: {{ course.instructor }}</p>
          </div>
        </li>
      </ul>
    </div>
    <div v-else>Oh no!!! We have no posts</div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "ViewCourse",
  data() {
    return {
      title: "",
      description: "",
      instructor: "",
      error: null,
    };
  },

  async created() {
    const response = await axios.get("course");

    this.$store.dispatch("course", response.data);

    // this.user = response.data;
    // console.log(response.data);
  },

  computed: {
    ...mapGetters(["course"]),
  },

  methods: {
    async course() {
      try {
        // this.$refs.form.validate();
        const response = await axios.post("course", {
          title: this.title,
          description: this.description,
          instructor: this.instructor,
        });
        this.$store.dispatch("course", response.data);
        // this.$router.push("/login");
      } catch (error) {
        this.error = "An error occurred!";
      }
    },
    // cancel() {
    //   this.$refs.form.reset();
    // },
  },
};
</script>