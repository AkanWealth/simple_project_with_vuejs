<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center" style="margin-bottom: 1rem; margin-top: 1rem">
      <v-col cols="12" sm="8" md="8">
        <v-card class="elevation-12">
          <v-row>
            <v-col cols="12" md="4" class="teal accent-3">
              <v-card-text class="white--text mt-12">
                <h1 class="text-center display-1">Contact</h1>
                <h5 class="text-center">You can contact us on our social media handle</h5>
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
                  <v-btn class="mx-2" fab color="black" outlined>
                    <v-icon>mdi-phone</v-icon>
                  </v-btn>
                  <v-btn class="mx-2" fab color="black" outlined>
                    <v-icon>mdi-twitter</v-icon>
                  </v-btn>
                </div>
              </v-card-text>
            </v-col>
            <v-col cols="12" md="8">
              <v-card-text class="mt-12">
                <h1 class="text-center display-2 teal--text text--accent-3">
                  Contact Us
                </h1>
                <hr />
                <div class="error" type="error" v-html="error" style="color: #fff" />
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field
                    label="Full Name"
                    v-model="fullname"
                    name="FullName"
                    :rules="fullnameRules"
                    prepend-icon="mdi-account"
                    type="text"
                    error-count="2"
                    color="teal accent-3"
                  />
                  <v-text-field
                    label="E-mail"
                    v-model="email"
                    name="Email"
                    :rules="emailRules"
                    type="text"
                    color="teal accent-3"
                    error-count="2"
                    prepend-icon="mdi-email"
                  />

                  <v-textarea
                    id="message"
                    label="Drop your message here..."
                    v-model="message"
                    name="message"
                    :rules="messageRules"
                    prepend-icon="mdi-message"
                    type="password"
                    error-count="2"
                    color="teal accent-3"
                  />
                </v-form>
              </v-card-text>
              <div class="text-center mt-3">
                <v-btn rounded color="teal accent-3" dark @click="contact" id="btn"
                  >Contact</v-btn
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
// import { mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "Contact",

  data: () => ({
    valid: true,
    fullname: "",
    email: "",
    message: "",
    error: null,
  }),
  computed: {
    // ...mapGetters(["user"]),
    fullnameRules() {
      return [
        (v) => !!v || "First Name is required",
        (v) => (v && v.length >= 2) || "Full Name must be at least 2 character long ",
      ];
    },
    emailRules() {
      return [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ];
    },
    messageRules() {
      return [
        (v) => !!v || "Message is required",
        (v) => (v && v.length >= 3) || "First name must be at least 3 character long ",
      ];
    },
  },

  methods: {
    async contact() {
      try {
        this.$refs.form.validate();
        await axios.post("contactUs", {
          fullname: this.fullname,
          email: this.email,
          message: this.message,
        });

        this.$router.push("/");
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
