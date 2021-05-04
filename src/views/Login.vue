<template>
  <v-container fluid style="margin-top: 5rem">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-card outlined flat class="mx-auto">
              <v-card-title> LOGIN </v-card-title>
              <v-divider />
              <v-container fluid>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      type="email"
                      label="E-mail"
                      filled
                      shaped
                      required
                    />
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="password"
                      :rules="passwordRules"
                      label="Password"
                      type="password"
                      filled
                      shaped
                      required
                    />
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
          <v-col cols="6" class="text-left">
            <p>
              Don't have an account ?
              <v-btn color="success" class="mr-4" to="/register">
                Sign up
              </v-btn>
            </p>
          </v-col>
          <v-col cols="6" class="text-right">
            <v-btn color="error" class="mr-4" @click="cancel"> Cancel </v-btn>
            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="login"
            >
              Login
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",

  components: {
    // Layout,
  },

  data: () => ({
    valid: true,
    email: "",
    password: "",
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
      this.$refs.form.validate();
      const response = await axios.post("login", {
        email: this.email,
        password: this.password,
      });

      localStorage.setItem("token", response.data.token);
      this.$router.push("/dashboard");
    },
    cancel() {
      this.$refs.form.reset();
    },
  },
};
</script>

