const tipCalculator = (e) => {
  let amount = document.querySelector('#bill').value;
  let tip = document.querySelector('#tip').value;
  let sharing = document.querySelector('#sharing').value;

  if(!amount) {
    document.querySelector('#modal-message').textContent = 'Type the amount of your bill !';
    document.querySelector('.modal').classList.add('show-modal');
    throw 'ERROR: Missing amount'
  } else if (!tip) {
    document.querySelector('#modal-message').textContent = 'How was the service?';
    document.querySelector('.modal').classList.add('show-modal');
    throw 'missing service'
  }

  switch (tip) {
    case 'outstanding':
      tip = 0.3;
      break;
    case 'good':
      tip = 0.2;
      break;
    case 'okay':
      tip = 0.15;
      break;
    case 'terrible':
      tip = 0.05;
      break
    default:
      break;
  }
  let grandTotal = (amount * (tip)) / sharing;

  document.querySelector('#grandTotal').textContent = grandTotal.toFixed(2);
  document.querySelector('#result').style.display = 'block';
  document.querySelector('#grandTotal').scrollIntoView()
};

document.querySelector('#submit').addEventListener('click', tipCalculator)

// ! Modal logic
function revealModal() {
  document.querySelector('.modal').classList.add('show-modal');
}
function hideModal() {
  document.querySelector('.modal').classList.remove('show-modal');
}
function hideModalOnEsc(event) {
  if (event.keyCode === 27) {
    hideModal();
  }
}

document.querySelector('.close-button, .modal').addEventListener('click', hideModal);
document.addEventListener('keyup', hideModalOnEsc); //


// ! Input Increment Logic
document.querySelector('#plus').addEventListener('click', function() {
  document.querySelector('.counter').value++;
})

document.querySelector('#minus').addEventListener('click', function() {
  if(document.querySelector('.counter').value >= 2) {
      document.querySelector('.counter').value--;
     }
});

// RETURN key as TAB
let inputs = document.querySelectorAll('input,select');
inputs.forEach(a => a.addEventListener('keypress', returnKeyAsTab));

function returnKeyAsTab(e) {
  if (e.which === 13) {
    e.preventDefault();
    let nextInput = document.querySelectorAll(`[tabIndex="${this.tabIndex + 1}"]`);
    // if no nextInput, go back to tabIndex 1
    if (nextInput.length === 0) {
      nextInput = document.querySelectorAll('[tabIndex="1"]');
    }
    tipCalculator();
    nextInput[0].focus();
  }
}

