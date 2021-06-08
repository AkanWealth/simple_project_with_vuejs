<template>
	<v-container>
		<!-- <v-tabs>
			<v-tab to="/view-course">Videos</v-tab>
			<v-tab to="/course">PDF</v-tab>
		</v-tabs> -->
		<div class="course" v-if="courses">
			<v-list dense>
				<v-list-item
					v-for="course in courses.data"
					:key="course.id"
					:title="course.title"
					:description="course.description"
					:instructor="course.instructor"
				>
					<v-list-item-content>
						<v-list-item-title style="font-size: 1.4rem">{{
							course.title
						}}</v-list-item-title>
						{{ course.description }} <br />
						Written By: {{ course.instructor }}
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</div>
		<!-- <div v-else>Oh no!!! No course available</div> -->
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
	},

	computed: {
		...mapGetters(["courses"]),
	},
};
</script>

<style scoped>
/* * {
	background: #1aa5a5;
	color: #ffffff;
} */
.courseData {
	color: red;
	/* display: table-row; */
}
</style>
