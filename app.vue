<template>
  <v-app>
    <v-app-bar color="primary" app>
      <v-app-bar-title>CareLink</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn to="/" variant="text">Home</v-btn>
      <v-btn to="/about" variant="text">About</v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <NuxtPage />
      </v-container>
    </v-main>

    <v-footer app color="primary" class="text-center">
      <div>&copy; {{ new Date().getFullYear() }} - CareLink</div>
    </v-footer>
  </v-app>
</template>

<script setup>
// No script needed for this layout
</script>

<style>
/* Add any global styles here */
</style>
