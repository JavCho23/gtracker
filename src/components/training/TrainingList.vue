<script setup lang="ts">
import type Training from "core/modules/training/domain";
import TrainingItem from "./TrainingItem.vue";
const trainings: Array<Training> = [
  {
    id: "1",
    date: new Date(),
    exercises: [
      {
        id: "1",
        name: "Femoral",
        weight: 20,
        sets: 4,
        reps: 12,
      },
      {
        id: "2",
        name: "Prensa",
        weight: 20,
        sets: 4,
        reps: 12,
      },
      {
        id: "3",
        name: "Zancadas",
        weight: 20,
        sets: 4,
        reps: 12,
      },
    ],
  },
  {
    id: "2",
    date: new Date(),
    exercises: [
      {
        id: "1",
        name: "Femoral",
        weight: 20,
        sets: 4,
        reps: 12,
      },
      {
        id: "2",
        name: "Prensa",
        weight: 20,
        sets: 4,
        reps: 12,
      },
      {
        id: "3",
        name: "Zancadas",
        weight: 20,
        sets: 4,
        reps: 12,
      },
    ],
  },
  {
    id: "3",
    date: new Date(),
    exercises: [
      {
        id: "1",
        name: "Femoral",
        weight: 20,
        sets: 4,
        reps: 12,
      },
      {
        id: "2",
        name: "Prensa",
        weight: 20,
        sets: 4,
        reps: 12,
      },
      {
        id: "3",
        name: "Zancadas",
        weight: 20,
        sets: 4,
        reps: 12,
      },
    ],
  },
];
</script>
<template>
  <section class="p-component">
    <h1>Entrenamientos realizados</h1>
    <main class="flex flex-column justify-content-around">
      <TrainingItem
        v-for="training in trainings"
        :key="training.id"
        :training="training"
      />
    </main>
  </section>
</template>
