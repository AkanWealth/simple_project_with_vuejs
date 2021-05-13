<template>
  <v-container>
    <h1 class="text-center display-1">Welcome To Simple Project</h1>
    <v-row
      align="center"
      justify="center"
      style="margin-bottom: 1rem; margin-top: 1rem"
    >
      <v-col cols="12" md="8">
        <v-card-text class="mt-12">
          <v-form>
            <v-text-field
              label="Search...."
              v-model="search"
              name="Search"
              :rules="fullnameRules"
              prepend-icon="mdi-search"
              type="text"
              color="teal accent-3"
              width="50rem"
            />
          </v-form>
        </v-card-text>
        <div class="text-center mt-3">
          <v-btn rounded color="teal accent-3" dark @click="contact"
            >Contact</v-btn
          >
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
</script>

<style>
</style>