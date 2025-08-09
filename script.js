document.getElementById('quiz-form').addEventListener('submit', function(e){
  e.preventDefault();
  let score = 0;
  const formData = new FormData(e.target);

  if(formData.get('q1').toLowerCase().includes('crept') && formData.get('q1').toLowerCase().includes('garden')) score++;
  if(formData.get('q2').toLowerCase().includes('silent')) score++;
  if(formData.get('q3').toLowerCase().includes('butterfly')) score++;

  const feedback = document.getElementById('quiz-feedback');
  if(score === 3){
    feedback.textContent = 'Great job! You got all the answers right!';
    feedback.style.color = 'green';
  } else if(score > 0){
    feedback.textContent = `You got ${score} out of 3 correct. Keep practicing!`;
    feedback.style.color = 'orange';
  } else {
    feedback.textContent = 'Try again! Read the passage carefully.';
    feedback.style.color = 'red';
  }
});
