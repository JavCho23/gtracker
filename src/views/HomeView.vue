<script setup lang="ts">
import HomeHeader from "@/components/HomeHeader.vue";
import TrainingList from "@/components/training/TrainingList.vue";
import Button from "primevue/button";

function onAddClick() {
  alert("Agregar un entrenamiento");
}
</script>

<template>
  <main class="p-4">
    <HomeHeader />
    <TrainingList />
    <Button
      icon="pi pi-plus"
      class="p-button-raised p-button-rounded fixed bottom-0 right-0 m-5 shadow-6"
      style="height: 3em; width: 3em"
      @click="onAddClick"
    />
  </main>
</template>
