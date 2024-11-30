<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps(['block'])

const guess = ref('')

const emit = defineEmits({
  addGuess: null,
})

const add = () => {
  emit('addGuess', guess.value)
  guess.value = ''
}

function validateInput() {
  guess.value = guess.value.replace(/[^1-7]/g, '')
}
</script>
<template>
  <div class="container">
    <div class="grid">
      <input
        type="text"
        name="code"
        placeholder="Please, enter your guess and hit enter"
        aria-label="Guess"
        maxlength="4"
        @input="validateInput"
        v-model="guess"
        @keyup.enter="add"
        :disabled="props.block"
      />
    </div>
  </div>
</template>
