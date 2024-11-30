<script setup lang="ts">
const props = defineProps(['guesses'])
</script>
<template>
  <div class="container">
    <table class="striped">
      <thead>
        <tr>
          <th scope="col" style="width: 15px">#</th>
          <th scope="col" style="width: 25px">Guess</th>
          <th scope="col">Score</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(guess, index) in props.guesses">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ guess.value }}</td>
          <td>
            <code>{{ guess.score }}</code>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
