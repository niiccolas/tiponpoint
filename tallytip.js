// js goes here
const tipCalculator = () => {
  //document.querySelector('h1').textContent = 'yo JavaScript'
  let amount = document.querySelector('#bill').value

  // tip level
  let tip = document.querySelector('#tip').value

  // number of people
  let sharing = document.querySelector('#sharing').value

  if(!amount) {
    alert('Enter an amount!'); throw 'missing amount'
  } else if (!tip) {
    alert('How was your service?'); throw 'missing service'
  }

  switch (tip) {
    case "outstanding":
      tip = 0.3;
      break;
    case "good":
      tip = 0.2;
      break;
    case "okay":
      tip = 0.15;
      break;
    case "terrible":
      tip = 0.05;
      break
    // default:
    //   alert('Tell us how was your service!')
    //   break;
  }
  const grandTotal = (amount * (tip)) / sharing

  document.querySelector('#grandTotal').textContent = grandTotal.toFixed(2);
  document.querySelector('#result').style.visibility = "visible";
  // console.log((amount * (tip)) / sharing);
}

document.querySelector('#submit').addEventListener("click", tipCalculator)
