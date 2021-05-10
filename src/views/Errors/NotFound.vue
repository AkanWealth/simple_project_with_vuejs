<template>
  <v-container class="container">
    <v-row>
      <!-- <v-col cols="12" class="text-center">
        <v-icon icon="sentiment_dissatisfied" size="large" />
      </v-col> -->
      <v-col cols="12" class="text-center">
        <h1>Oops!</h1>
      </v-col>
      <v-col cols="12" class="text-center">
        <h3>The page you are looking for is not here anymore...</h3>
      </v-col>
      <v-col vs-w="12" class="text-center">
        <v-btn to="/" text class="primary">
          <v-icon>mdi-home</v-icon>
          Back to Home page...
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "NotFound",
};
</script>
<style scoped>
.text-center {
  text-align: center;
  margin-bottom: 20px;
}
.container {
  padding: 150px;
}
</style>