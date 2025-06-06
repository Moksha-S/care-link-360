<template>
  <v-footer app color="primary" class="text-center">
    <div>&copy; {{ currentYear }} - CareLink</div>
  </v-footer>
</template>

<script setup>
import { getCurrentYear } from '~/utils/date';

const currentYear = getCurrentYear();
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
