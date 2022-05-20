let submit = document.getElementById("submit");
let span = document.getElementById("result");

submit.addEventListener("click", (event) => {
  event.preventDefault();
let n = document.getElementById("number").value
let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
  'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen',
  'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
let tens = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty',
  'seventy', 'eighty', 'ninety']
let result = ''

  if(n<20 && n>=0){
    result = numbers[n]
  } else if (n>=20 && n <100){
    n = n.toString()
    if (n[1] > 0){
      result = tens[n[0]-2] + "-" + numbers[n[1]]
    } else {
      result = tens[n[0]-2]
    }
  } else if ( n > 99 && n < 1000) {
    n = n.toString()
    if(n[1] == 0 && n[2] == 0){
      result = numbers[n[0]] + " hundred"
    } else if(n[1] == 0 && n[2] > 0) {
      result = numbers[n[0]] + " hundred " + numbers[n[2]]
    } else if(n[1] > 0 && n[2] == 0) {
      result = numbers[n[0]] + " hundred " + tens[n[1]-2]
    } else if(n[1] > 0 && n[2] > 0 && (n[1] + n[2] > 20)) {
      result = numbers[n[0]] + " hundred " + tens[n[1]-2] + "-" + numbers[n[2]]
    } else if(n[1] > 0 && n[2] > 0 && (n[1] + n[2] < 20)) {
      result = numbers[n[0]] + " hundred " + numbers[n[1]+n[2]]
    }
  }
   span.innerHTML = result
})
