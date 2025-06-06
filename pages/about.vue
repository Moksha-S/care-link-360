<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" md="8">
      <v-card>
        <v-card-title class="text-h4 text-center"> About CareLink </v-card-title>
        <v-card-text>
          <p class="text-body-1 mb-4">
            CareLink is a modern healthcare management platform designed to improve the healthcare
            experience for both patients and providers.
          </p>

          <v-divider class="my-4"></v-divider>

          <h3 class="text-h5 mb-3">Our Mission</h3>
          <p class="text-body-1 mb-4">
            To transform healthcare delivery through technology, making it more accessible,
            efficient, and patient-centered.
          </p>

          <h3 class="text-h5 mb-3">Our Values</h3>
          <v-list>
            <v-list-item v-for="(value, index) in values" :key="index">
              <v-list-item-title class="font-weight-bold">{{ value.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ value.description }}</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
const values = [
  {
    title: 'Patient-Centered Care',
    description: 'We put patients at the center of everything we do.',
  },
  {
    title: 'Innovation',
    description: 'We continuously seek new ways to improve healthcare delivery.',
  },
  {
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and partnerships.',
  },
  {
    title: 'Integrity',
    description: 'We uphold the highest standards of honesty and ethics.',
  },
];
</script>
