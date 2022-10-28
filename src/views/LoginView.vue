<script setup lang="ts">
import LoginWelcome from "../components/LoginWelcome.vue";
import Button from "primevue/button";

import { login } from "../../core/services/auth";
import { userState } from "../state/user";
import { useRouter } from "vue-router";
const router = useRouter();
async function onLoginClick() {
  try {
    const user = await login();
    userState.user = user;
    router.push("/");
  } catch (error) {
    console.log(error);
    alert("Ocurrio un error al iniciar sesión");
  }
}
</script>

<template>
  <div class="p-4">
    <header class="flex p-component flex-column align-items-center text-center">
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/logo.svg"
        width="125"
        height="125"
      />

      <LoginWelcome />
    </header>
    <main class="flex justify-content-center align-items-center">
      <Button
        label="Ingresar"
        icon="pi pi-google"
        iconPos="left"
        @click="onLoginClick"
      />
    </main>
  </div>
</template>

<style scoped></style>
