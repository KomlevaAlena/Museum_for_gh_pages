function ticketCalculator() {
  // const minInput = document.getElementById('adult-count');
  // const maxInput = document.getElementById('senior-count');
  // const totalSpan = document.getElementById('total-sum');
  // const pricePerTicket = 10;

  // function calculate() {
  //   const min = parseInt(minInput.value) || 0;
  //   const max = parseInt(maxInput.value) || 0;
  //   const count = Math.max(min, max) - Math.min(min, max) + 1;
  //   totalSpan.textContent = count * pricePerTicket;
  // }

  // minInput.addEventListener('input', calculate);
  // maxInput.addEventListener('input', calculate);

  // calculate();
  const adultInput = document.getElementById('adult-count');
  const seniorInput = document.getElementById('senior-count');
  const totalSum = document.getElementById('total-sum');
  const quantityBtns = document.querySelectorAll('.tickets-quantity-button');

  //price
  const ADULT_PRICE = 20;
  const SENIOR_PRICE = 10;

  //load values
  function loadSavedValues() {
        const savedAdult = localStorage.getItem('tickets-adult');
        const savedSenior = localStorage.getItem('tickets-senior');
        
        if (savedAdult) adultInput.value = savedAdult;
        if (savedSenior) seniorInput.value = savedSenior;
        
        calculateTotal();
    }
    //save values
    function saveValues() {
        localStorage.setItem('tickets-adult', adultInput.value);
        localStorage.setItem('tickets-senior', seniorInput.value);
    }

    //calculate total
    function calculateTotal() {
        const adultCount = parseInt(adultInput.value) || 0;
        const seniorCount = parseInt(seniorInput.value) || 0;
        
        const total = (adultCount * ADULT_PRICE) + (seniorCount * SENIOR_PRICE);
        totalSum.textContent = Math.floor(total);
        
        saveValues();
    }
    //buttons +/-
     quantityBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const target = this.dataset.target;
            const input = target === 'adult-count' ? adultInput : seniorInput;
            let value = parseInt(input.value) || 0;
            
            if (this.classList.contains('plus')) {
                value += 1;
            } else {
                value = Math.max(1, value - 1);
            }
            
            input.value = value;
            calculateTotal();
        });
    });

    //input change

     adultInput.addEventListener('change', function() {
        this.value = Math.max(1, parseInt(this.value) || 1);
        calculateTotal();
    });
    
    seniorInput.addEventListener('change', function() {
        this.value = Math.max(1, parseInt(this.value) || 1);
        calculateTotal();
    });

    loadSavedValues();
}

export {ticketCalculator};
