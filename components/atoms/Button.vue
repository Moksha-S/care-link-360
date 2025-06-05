<template>
  <v-btn
    :variant="variant"
    :color="color"
    :to="to"
    :size="size"
    :disabled="disabled"
    :block="block"
    :icon="icon"
    :prepend-icon="prependIcon"
    :append-icon="appendIcon"
    :elevation="elevation"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </v-btn>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: "text",
    validator: (value) =>
      ["text", "outlined", "elevated", "plain", "tonal", "flat"].includes(
        value
      ),
  },
  color: {
    type: String,
    default: "primary",
  },
  to: {
    type: [String, Object],
    default: null,
  },
  size: {
    type: String,
    default: "default",
    validator: (value) =>
      ["small", "default", "large", "x-large"].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: Boolean,
    default: false,
  },
  prependIcon: {
    type: String,
    default: null,
  },
  appendIcon: {
    type: String,
    default: null,
  },
  elevation: {
    type: [Number, String],
    default: undefined,
  },
});

defineEmits(["click"]);
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
