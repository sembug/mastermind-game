<script setup lang="ts">
const props = defineProps(['maxTries'])
</script>

<template>
  <header class="container">
    <hgroup>
      <h1>Mastermind</h1>
      <div>Mastermind is a code-breaking game for two players.</div>
    </hgroup>
  </header>
  <h3>Instructions:</h3>
  <ul>
    <li>Guess the secret color code in as few tries as possible.</li>
    <li>Please, enter your color code.</li>
    <li>You can use 1-7.</li>
    <li>You have {{ props.maxTries }} tries.</li>
  </ul>
</template>

<style scoped></style>
