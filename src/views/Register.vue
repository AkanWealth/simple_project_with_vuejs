<template>
  <v-container class="fill-height" fluid>
    <v-row
      align="center"
      justify="center"
      style="margin-bottom: 1rem; margin-top: 1rem"
    >
      <v-col cols="12" sm="8" md="8">
        <v-card class="elevation-12">
          <v-row>
            <v-col cols="12" md="4" class="teal accent-3">
              <v-card-text class="white--text mt-12">
                <h1 class="text-center display-1">Welcome back, Friend!</h1>
                <h5 class="text-center">
                  To Keep connected with us please login with your personnel
                  info
                </h5>
              </v-card-text>
              <div class="text-center">
                <v-btn
                  rounded
                  outlined
                  dark
                  to="/login"
                  class="text-decoration-none"
                >
                  Login</v-btn
                >
              </div>
            </v-col>
            <v-col cols="12" md="8">
              <v-card-text class="mt-12">
                <h1 class="text-center display-2 teal--text text--accent-3">
                  Sign Up for Easy Class
                </h1>
                <div class="text-center mt-4">
                  <v-btn class="mx-2" fab color="black" outlined>
                    <v-icon>mdi-facebook</v-icon>
                  </v-btn>

                  <v-btn class="mx-2" fab color="black" outlined>
                    <v-icon>mdi-google-plus</v-icon>
                  </v-btn>
                  <v-btn class="mx-2" fab color="black" outlined>
                    <v-icon>mdi-linkedin</v-icon>
                  </v-btn>
                </div>
                <h4 class="text-center mt-4">
                  Ensure your email for registration
                </h4>
                <div
                  class="error"
                  type="error"
                  v-html="error"
                  style="color: #fff"
                />
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field
                    label="First Name"
                    v-model="first_name"
                    name="First Name"
                    :rules="firstNameRules"
                    prepend-icon="mdi-account"
                    type="text"
                    error-count="2"
                    color="teal accent-3"
                  />
                  <v-text-field
                    label="Last Name"
                    v-model="last_name"
                    name="Last Name"
                    :rules="lastNameRules"
                    prepend-icon="mdi-account"
                    type="text"
                    error-count="2"
                    color="teal accent-3"
                  />
                  <v-text-field
                    label="Email"
                    v-model="email"
                    name="Email"
                    :rules="emailRules"
                    type="text"
                    color="teal accent-3"
                    error-count="2"
                    prepend-icon="mdi-email"
                  />

                  <v-text-field
                    id="password"
                    label="Password"
                    v-model="password"
                    name="password"
                    :rules="passwordRules"
                    prepend-icon="mdi-lock"
                    type="password"
                    error-count="2"
                    color="teal accent-3"
                  />
                </v-form>
              </v-card-text>
              <div class="text-center mt-3">
                <v-btn
                  rounded
                  color="teal accent-3"
                  dark
                  @click="register"
                  id="btn"
                  >SIGN UP</v-btn
                >
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "Register",

  data: () => ({
    valid: true,
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    error: null,
  }),
  computed: {
    firstNameRules() {
      return [
        (v) => !!v || "First Name is required",
        (v) =>
          (v && v.length >= 2) ||
          "First name must be at least 2 character long ",
      ];
    },
    lastNameRules() {
      return [
        (v) => !!v || "Last Name is required",
        (v) =>
          (v && v.length >= 2) ||
          "Last name must be at least 2 character long ",
      ];
    },
    passwordRules() {
      return [
        (v) => !!v || "Password is required",
        (v) => (v && v.length >= 6) || "Password must have 6+ characters",
      ];
    },
    emailRules() {
      return [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ];
    },
  },

  methods: {
    async register() {
      try {
        this.$refs.form.validate();
        const response = await axios.post("signup", {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password,
        });
        this.$store.dispatch("user", response.data);
        this.$router.push("/login");
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
<style scoped>
#btn {
  outline: none;
}
</style>