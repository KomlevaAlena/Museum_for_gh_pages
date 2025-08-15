export function formTimeSelect() {
    document.querySelector('.custom-time-select .selected-option').addEventListener('click', function() {
  this.parentElement.classList.toggle('active');
});

document.querySelectorAll('.custom-time-select .option').forEach(option => {
  option.addEventListener('click', function() {
    const value = this.getAttribute('data-value');
    const text = this.textContent;
    const selectedTime = document.querySelector('.custom-time-select .selected-time');
    
    selectedTime.textContent = text;
    selectedTime.removeAttribute('data-placeholder');
    document.getElementById('selected-time').value = value;
    document.querySelector('.custom-time-select').classList.remove('active');
  });
});

document.addEventListener('click', function(e) {
  if (!e.target.closest('.custom-time-select')) {
    document.querySelector('.custom-time-select')?.classList.remove('active');
  }
});
}