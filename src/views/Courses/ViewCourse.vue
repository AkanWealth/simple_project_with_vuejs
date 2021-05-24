<template>
  <v-container>
    <div class="course" v-if="courses">
      <v-list dense>
        <v-list-item
          v-for="course in courses.data"
          :key="course.id"
          :title="course.title"
          :description="course.description"
          :instructor="course.instructor"
        >
          <!-- <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action> -->
          <v-list-item-content>
            <v-list-item-title>{{ course.title }}</v-list-item-title>
            {{ course.description }} <br />
            Written By: {{ course.instructor }}
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <!-- <h3>Courses</h3>
      <div
        class="courseData"
        v-for="course in courses.data"
        :key="course.id"
        :title="course.title"
        :description="course.description"
        :instructor="course.instructor"
      >
        {{ course.title }}<br />
        {{ course.description }} <br />
        Written By: {{ course.instructor }}
      </div> -->
    </div>
    <div v-else>Oh no!!! No course available</div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "ViewCourse",

  async created() {
    const response = await axios.get("courses");

    this.$store.dispatch("courses", response.data);

    // this.user = response.data;
    // console.log(response.data);
  },

  computed: {
    ...mapGetters(["courses"]),
  },
};
</script>

<style scoped>
.courseData {
  color: red;
  /* display: table-row; */
}
</style>
