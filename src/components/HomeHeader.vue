<script setup lang="ts">
import { userState } from "@/state/user";

const user = userState.user;
const firstName = user?.displayName?.split(" ")[0];
</script>

<template>
  <div class="header">
    <h1>Bienvenido(a) {{ firstName }}</h1>
    <br />
    <h3>Estamos construyendo el tracker...</h3>
  </div>
</template>
