// js goes here
const tipCalculator = (e) => {
  //document.querySelector('h1').textContent = 'yo JavaScript'
  let amount = document.querySelector('#bill').value

  // tip level
  let tip = document.querySelector('#tip').value

  // number of people
  let sharing = document.querySelector('#sharing').value

  if(!amount) {
    document.querySelector('#modal-message').textContent = 'How much was your bill?';
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
  const grandTotal = (amount * (tip)) / sharing

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
// document.addEventListener('keydown', disableTab); //
document.addEventListener('keyup', hideModalOnEsc); //


// ! Input Increment Logic
document.querySelector('.grid-item-plus').addEventListener('click', function(){
  document.querySelector('.counter').value++;
})

document.querySelector('.grid-item-minus').addEventListener('click', function(){
  if(document.querySelector('.counter').value >= 2){
      document.querySelector('.counter').value--;
     }
});