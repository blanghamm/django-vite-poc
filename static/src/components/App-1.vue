<template>
  <h1>{{ message }}</h1>
</template>

<script>
import {ref, defineComponent} from "vue";

export default defineComponent({
  setup() {
    const message = ref('Application 1')
    return {
      message
    }
  }
})
</script>

<style>
h1 {
  background-color: green;
}
</style>