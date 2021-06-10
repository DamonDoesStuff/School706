const number = 15
let guess = 0

while (guess !== number) {
  guess = prompt('Guess a number between 1 and 30')
  guess = parseInt(guess)
  if (guess > number) {
    alert('Guess is TOO big')
  }
  if (guess < number) {
    alert('Guess is TOO small')
  }
}
