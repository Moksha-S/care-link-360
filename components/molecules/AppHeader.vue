<template>
  <v-app-bar color="primary" app>
    <v-app-bar-title>CareLink</v-app-bar-title>
    <v-spacer></v-spacer>
    <AtomsButton to="/" variant="text" color="white">Home</AtomsButton>
    <AtomsButton to="/about" variant="text" color="white">About</AtomsButton>
    <AtomsButton to="/dashboard" variant="text" color="white">
      Dashboard
    </AtomsButton>
    <AtomsButton to="/users" variant="text" color="white">Users</AtomsButton>
  </v-app-bar>
</template>

<script setup>
// No imports
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
