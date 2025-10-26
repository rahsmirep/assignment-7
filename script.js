// Confirm script is connected
console.log("script.js connected!");

// Object to store user answers
const userAnswers = {};

// Select all question blocks
const questionBlocks = document.querySelectorAll('.question-block');

questionBlocks.forEach((block, index) => {
  const buttons = block.querySelectorAll('.answer-btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove 'selected' class from all buttons in this block
      buttons.forEach(b => b.classList.remove('selected'));

      // Add 'selected' class to clicked button
      btn.classList.add('selected');

      // Store answer using question index
      userAnswers[`q${index + 1}`] = btn.dataset.answer;

      // Optional: log to verify
      console.log(`Question ${index + 1}: ${btn.dataset.answer}`);
    });
  });
});

// Scoring system: assign points to each answer
const scoring = {
  q1: { A: 3, B: 1 },
  q2: { A: 2, B: 4 },
  q3: { A: 1, B: 3 },
  // Add more questions if needed
};

// Function to calculate and display result
function displayResult() {
  let total = 0;

  for (let q in userAnswers) {
    const answer = userAnswers[q];
    total += scoring[q][answer] || 0;
  }

  let result = '';
  if (total <= 6) result = 'Explorer';
  else if (total <= 9) result = 'Artist';
  else if (total <= 12) result = 'Leader';
  else result = 'Thinker';

  document.getElementById('result-container').textContent = `You are a ${result}!`;
}

document.getElementById('result-btn').addEventListener('click', displayResult);
// Confirm script is connected

