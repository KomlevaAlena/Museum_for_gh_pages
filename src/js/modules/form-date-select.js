export function formDateSelect() {
    document.querySelector('.selected-option').addEventListener('click', function() {
  this.parentElement.classList.toggle('active');
});

document.querySelectorAll('.option').forEach(option => {
  option.addEventListener('click', function() {
    const value = this.getAttribute('data-value');
    const text = this.textContent;
    const selectedDate = document.querySelector('.selected-date');
    
    selectedDate.textContent = text;
    selectedDate.removeAttribute('data-placeholder');
    selectedDate.style.color = '#030303';
    
    document.getElementById('selected-date').value = value;
    document.querySelector('.custom-date-select').classList.remove('active');
  });
});

document.addEventListener('click', function(e) {
  if (!e.target.closest('.custom-date-select')) {
    document.querySelector('.custom-date-select').classList.remove('active');
  }
});
}
