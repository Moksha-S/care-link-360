<script setup>
import { useCounterStore } from "@/stores/counter";

const counter = useCounterStore();
</script>

<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="pa-4">
        <v-card-title class="text-h4 text-center">
          Welcome to CareLink
        </v-card-title>
        <v-card-subtitle class="text-center mt-2">
          Your Healthcare Management Solution
        </v-card-subtitle>
        <v-card-text>
          <p>
            CareLink provides a comprehensive platform for managing healthcare
            services, connecting patients with healthcare providers, and
            streamlining medical processes.
          </p>
          <v-divider class="my-4"></v-divider>
          <v-row justify="center" class="mt-4">
            <v-col cols="12" md="6" class="text-center">
              <AtomsButton variant="outlined" size="large" block>
                Get Started
              </AtomsButton>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
      <div class="p-4">
        <p class="text-xl font-bold">Count: {{ counter.count }}</p>
        <AtomsButton @click="counter.increment">+</AtomsButton>
        <AtomsButton @click="counter.decrement">-</AtomsButton>
      </div>
    </v-col>
  </v-row>
</template>
