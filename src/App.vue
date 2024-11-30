<script setup lang="ts">
import { ref, onMounted } from 'vue'

import { log, calculateScore, randomSample } from './utils'
import HeaderInfo from './components/HeaderInfo.vue'
import AddGuess from './components/AddGuess.vue'
import ShowGuesses from './components/ShowGuesses.vue'

const MAX_TRIES = 10

const guesses = ref<any[]>([])
const block = ref(false)
const tries = ref(0)
const target = ref('')

function show(guess: string) {
  tries.value++
  let [win, score] = calculateScore(target.value, String(guess))

  if (win) {
    block.value = true
  }

  if (tries.value == MAX_TRIES) {
    score = `You loose! CODE: ${target.value}`
    block.value = true
  }

  guesses.value.push({ value: guess, score })
}

onMounted(() => {
  target.value = randomSample([1, 2, 3, 4, 5, 7], 4).join('')
  log(`target ${target.value}`)
})
</script>

<template>
  <HeaderInfo :max-tries="MAX_TRIES" />
  <AddGuess @add-guess="show" :block="block" />
  <ShowGuesses :guesses="guesses" />
</template>

<style scoped></style>
