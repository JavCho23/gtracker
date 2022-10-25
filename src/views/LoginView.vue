<script setup lang="ts">
import WelcomeBack from "../components/LoginWelcome.vue";
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
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <WelcomeBack msg="Javier" />
    </div>
  </header>
  <main class="flex justify-content-center align-items-center">
    <Button
      label="Iniciar sesión"
      icon="pi pi-google"
      iconPos="left"
      @click="onLoginClick"
    />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
