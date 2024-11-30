export function log(msg: string) {
  console.log(msg)
}

export function calculateScore(target: string, guess: string) {
  let score = ''
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === target[i]) {
      score += 'X'
    }
    if (guess[i] !== target[i] && target.includes(guess[i])) {
      score += 'O'
    }
  }
  if (score == 'XXXX') {
    return [true, 'You win!']
  }

  return [false, score]
}

export function randomSample<T>(arr: T[], size: number): T[] {
  if (size > arr.length) throw new Error('Sample size cannot be greater than the population size.')
  const copy = [...arr] // Spread operator for shallow copy
  return Array.from({ length: size }, () => {
    const randomIndex = Math.floor(Math.random() * copy.length)
    return copy.splice(randomIndex, 1)[0]
  })
}
