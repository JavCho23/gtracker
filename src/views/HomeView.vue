<script setup lang="ts">
import { userState } from "@/state/user";

const user = userState.user;
</script>

<template>
  <h1>Bienvenido {{ user?.displayName }}</h1>
  <br />
  <h3>Estamos construyendo el tracker...</h3>
</template>
