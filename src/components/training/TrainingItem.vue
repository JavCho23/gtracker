<script setup lang="ts">
import Card from "primevue/card";
import type { PropType } from "vue";
import type Training from "../../../core/modules/training/domain";
import ExerciseItem from "./ExerciseItem.vue";

defineProps({
  training: {
    type: Object as PropType<Training>,
    required: true,
  },
});
</script>

<template>
  <Card style="margin-bottom: 1em" class="shadow-6 border-round-md">
    <template #header>
      <div class="text-right pt-2 pr-3 font-bold">
        {{ training.date.toLocaleDateString() }}
      </div>
    </template>
    <template #content>
      <div class="flex overflow-scroll">
        <ExerciseItem
          v-for="exercise in training.exercises"
          :key="exercise.id"
          :exercise="exercise"
        />
      </div>
    </template>
  </Card>
</template>
