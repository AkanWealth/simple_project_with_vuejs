<template>
  <v-container fluid>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-card outlined flat class="mx-auto">
              <v-card-title> SIGN UP </v-card-title>
              <v-divider />
              <v-container fluid>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="first_name"
                      :rules="first_nameRules"
                      label="First Name"
                      filled
                      shaped
                      required
                    />
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="last_name"
                      :rules="last_nameRules"
                      label="Last Name"
                      filled
                      shaped
                      required
                    />
                  </v-col>
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
                  <!-- <v-col cols="12">
                    <v-text-field
                      v-model="confirm_password"
                      :rules="password_confirmRules"
                      label="Confirm Password"
                      type="password"
                      filled
                      shaped
                      required
                    />
                  </v-col> -->
                </v-row>
              </v-container>
            </v-card>
          </v-col>
          <v-col cols="6" class="text-left">
            <p>
              Already have an account ?
              <v-btn color="success" class="mr-4" to="/login"> Login </v-btn>
            </p>
          </v-col>
          <v-col cols="6" class="text-right">
            <v-btn color="error" class="mr-4" @click="cancel"> Cancel </v-btn>
            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="register"
            >
              Sign up
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
  name: "Register",

  components: {
    // Layout,
  },

  data: () => ({
    valid: true,
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  }),
  computed: {
    first_nameRules() {
      return [(v) => !!v || "First Name is required"];
    },
    last_nameRules() {
      return [(v) => !!v || "Last Name is required"];
    },
    passwordRules() {
      return [(v) => !!v || "Password is required"];
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
      this.$refs.form.validate();
      const response = await axios.post("signup", {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password,
      });
      console.log(response);
      this.$router.push("/login");
    },
    cancel() {
      this.$refs.form.reset();
    },
  },
};
</script>

