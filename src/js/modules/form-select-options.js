export function ticketCastomSelect () {
   
document.querySelectorAll('.custom-select').forEach(select => {
  const selectedOption = select.querySelector('.selected-option');
  const selectedText = select.querySelector('.selected-text');
  const options = select.querySelectorAll('.option');
  const nativeSelect = select.querySelector('select');
  
  

  updateSelected();

  
  selectedOption.addEventListener('click', () => {
    select.classList.toggle('active');
  });

  
  options.forEach(option => {
    option.addEventListener('click', () => {
      options.forEach(opt => opt.classList.remove('selected'));
      option.classList.add('selected');
      
      nativeSelect.value = option.dataset.value;
      updateSelected();
      select.classList.remove('active');
    });
  });

  
  document.addEventListener('click', (e) => {
    if (!select.contains(e.target)) {
      select.classList.remove('active');
    }
  });

  
  function updateSelected() {
    const selectedOption = nativeSelect.options[nativeSelect.selectedIndex];
    
    if (selectedOption.value === "") {
      selectedText.textContent = selectedText.dataset.placeholder;
      selectedText.setAttribute('data-placeholder', '');
    } else {
      selectedText.textContent = selectedOption.text;
      selectedText.removeAttribute('data-placeholder');
    }
  }

  
  nativeSelect.addEventListener('change', updateSelected);
});
}