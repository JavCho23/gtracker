<script setup lang="ts">
import Card from "primevue/card";
import Divider from "primevue/divider";
import type { PropType } from "vue";
import type Exercise from "../../../core/modules/exercise/domain";

defineProps({
  exercise: {
    type: Object as PropType<Exercise>,
    required: true,
  },
});
</script>

<template>
  <Card class="shadow-none w-7rem min-w-max">
    <template #title>
      <h1 class="text-base">{{ exercise.name }}</h1>
    </template>
    <template #content>
      <ul class="list-none p-0 m-0 flex flex-column align-items-center">
        <li>{{ exercise.weight }} kg</li>
        <li>{{ exercise.reps }} reps</li>
        <li>{{ exercise.sets }} sets</li>
      </ul>
    </template>
  </Card>
  <Divider layout="vertical" />
</template>

<style scoped>
.p-card-body {
  padding: 0;
}
</style>
