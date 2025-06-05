<template>
  <v-app>
    <MoleculesAppHeader />
    <v-main>
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>

    <MoleculesAppFooter />
  </v-app>
</template>

<script setup>
// Layout component logic can go here
</script>

<style>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex-grow: 1;
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}
</style>
