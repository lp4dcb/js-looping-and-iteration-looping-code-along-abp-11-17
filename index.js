// Code your solutions in this file
function printBadges(arr){
  for (let i = 0; i< arr.length; i++){
    console.log(`Welcome ${arr[i]}! You are employee #${[i+1]}.`)
  }
  return arr
}

function tailsNeverFails(num){
  let tails = 0;
  while(Math.random(num) >= 0.5){
    tails++
  }
  return `You got ${tails} tails in a row!`
}
