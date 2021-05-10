<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="8">
        <v-card class="elevation-12">
          <v-row>
            <v-col cols="12" md="8">
              <v-card-text class="mt-12">
                <h1 class="text-center display-2 teal--text text--accent-3">
                  Sign in to Simple Project
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
                  dark
                  style="color: #fff"
                />
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field
                    label="Email"
                    v-model="email"
                    name="Email"
                    :rules="emailRules"
                    type="text"
                    color="teal accent-3"
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
                    color="teal accent-3"
                  />
                </v-form>
                <h5 class="text-center mt-4">
                  <router-link
                    to="/forgetPassword"
                    class="text-decoration-none"
                  >
                    Forgot your password ?</router-link
                  >
                </h5>
              </v-card-text>
              <div class="text-center mt-3">
                <v-btn rounded color="teal accent-3" dark @click="login"
                  >SIGN IN</v-btn
                >
              </div>
            </v-col>
            <v-col cols="12" md="4" class="teal accent-3">
              <v-card-text class="white--text mt-12">
                <h1 class="text-center display-1">Hello, Friend!</h1>
                <h5 class="text-center">
                  Enter your personal details and start a journey with us
                </h5>
              </v-card-text>
              <div class="text-center">
                <v-btn
                  rounded
                  outlined
                  dark
                  to="/signup"
                  class="text-decoration-none"
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
  name: "Login",

  data: () => ({
    valid: true,
    email: "",
    password: "",
    error: null,
  }),

  computed: {
    emailRules() {
      return [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ];
    },
    passwordRules() {
      return [(v) => !!v || "Password is required"];
    },
  },

  methods: {
    async login() {
      try {
        const response = await axios.post("login", {
          email: this.email,
          password: this.password,
        });
        this.$refs.form.validate();

        // let token = response.data.token;
        localStorage.setItem("token", response.data.token);
        this.$store.dispatch("user", response.data.user);
        this.$router.push("/dashboard");
        window.location.reload();
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

