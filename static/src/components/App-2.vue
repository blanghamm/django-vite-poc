<template>
  <h1>{{ message }}</h1>
</template>

<script setup>
import { ref } from "vue";
const message = ref('Application 2')
</script>

<style>
h1 {
  background-color: red;
}
</style>