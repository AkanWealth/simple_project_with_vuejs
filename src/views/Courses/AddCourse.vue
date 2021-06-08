<template>
  <div>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="8">
        <v-card-text class="mt-12">
          <h4 class="text-center mt-4">Post course here</h4>
          <div class="error" type="error" v-html="error" style="color: #fff" />
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              label="Title"
              v-model="title"
              :rules="titleRules"
              name="Title"
              type="text"
              color="teal accent-3"
            />
            <v-textarea
              label="Description"
              v-model="description"
              :rules="descriptionRules"
              name="Description"
              type="text"
              color="teal accent-3"
            />
            <v-text-field
              label="Instructor"
              v-model="instructor"
              :rules="instructorRules"
              name="Instructor"
              type="text"
              color="teal accent-3"
            />
            <v-col cols="12" class="text-right">
              <v-btn rounded color="error" class="mr-4" @click="cancel">
                Cancel
              </v-btn>
              <v-btn
                rounded
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="addCourse"
                id="btn"
              >
                Submit
              </v-btn>
            </v-col>
          </v-form>
        </v-card-text>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddCourse",

  data() {
    return {
      title: "",
      description: "",
      instructor: "",
      valid: true,
      error: null,
    };
  },
  computed: {
    titleRules() {
      return [
        (v) => !!v || "Title is required",
        (v) =>
          (v && v.length >= 3) || "Title must be at least 3 character long ",
      ];
    },
    descriptionRules() {
      return [
        (v) => !!v || "Description is required",
        (v) =>
          (v && v.length >= 3) ||
          "Description must be at least 3 character long ",
      ];
    },
    instructorRules() {
      return [(v) => !!v || "Must have an Instructor"];
    },
  },

  methods: {
    async addCourse() {
      try {
        const response = await axios.post("course", {
          title: this.title,
          description: this.description,
          instructor: this.instructor,
        });
        this.$store.dispatch("courses", response.data);
        this.$router.push("/view-course");
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
    cancel() {
      this.$refs.form.reset();
    },
  },
};
</script>
