window.addEventListener('load', init);






// Available levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 2
}

// To change level
const currentLevel = levels.easy;

// Variables
let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
  'success',
  'river',
  'lucky',
  'statue',
  'generate',
  'focus',
  'persistent',
  'free',
  'determination',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'beautiful',
  'cure',
  'laughter',
  'magic',
  'mastery',
  'space',
  'definition',
  'constistency',
  'wealth',
  'income',
  'peaceful',
  'peace',
  'harmony',
  'develop',
  'create',
  'deliberate',
  'build',
  'execute',
  'strategize',
  'engage',
  'fearless',
  'positive',
  'mindset',
  'healthy',
  'thinking',
  'thoughts',
  'ideas',
  'clouds',
  'rain',
  'weather',
  'sun',
  'nature',
  'natural',
  'efficient',
  'business',
  'professional',
  'operations',
  'planning',
  'complete',
  'finished',
  'eliminate',
  'remove',
  'explore',
  'excite',
  'interest',
  'intrigue',
  'passion',
  'dream',
  'music',
  'sound',
  'vibration',
  'compete',
  'creation',
  'exist',
  'destroy',
  'reproduce',
  'produce',
  'inspire',
  'encourage',
  'leadership',
  'change',
  'improve',
  'enhance',
  'renew',
  'upgrade',
  'relocate',
  'travel',
  'vacation',
  'fun',
  'love',
  'trust',
  'transparency',
  'honesty',
  'accuracy',
  'persistence',
  'continuity',
  'growth',
  'strength',
  'difficulty',
  'adversity',
  'force',
  'intensity',
  'increase',
  'yield',
  'invest',
  'energy'

];

// Initialize Game
function init() {
  // Show number of seconds in UI 
  seconds.innerHTML = currentLevel;
  // Load word from array
  showWord(words);//Will take in the entire array of word
  // Start matching on word input
  wordInput.addEventListener('input', startMatch);

  // Call countdown every second
  setInterval(countDown, 1000);
  // Check game status
  setInterval(checkStatus, 50);
}

// Start Match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    // Allows for level change
    time = currentLevel + 1;;
    // Show a new word
    showWord(words);
    wordInput.value = '';
    score++;
  }
  // changes -1 score to zero upon reset
  if (score === -1) {
    scoreDisplay.innerHTML = 0;

  } else {
    scoreDisplay.innerHTML = score;
  }

}


// Match current word to word input
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct!!!";
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

// Pick & show random word
function showWord(words) {
  // Generates a random array index (number)
  const randomIndex = Math.floor(Math.random() * words.length);
  // Output random word
  currentWord.innerHTML = words[randomIndex];
}

// Countdown timer 
function countDown() {
  // MAke sure time has not run out
  if (time > 0) {
    // Decrement time
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }
  // Show time

  timeDisplay.innerHTML = time;

}
// Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over!";
    // Resets score back to 0
    score = -1;
  }
}