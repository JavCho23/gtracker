<script setup lang="ts">
import { userState } from "@/state/user";

const user = userState.user;
const firstName = user?.displayName?.split(" ")[0];
</script>

<template>
  <header class="p-component">
    <h1>Bienvenido(a) {{ firstName }}</h1>
  </header>
</template>
