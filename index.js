// Code your solutions in this file
function printBadges(arr){
  for(let i = 0; i < arr.length; i++){
    console.log(`Welcome ${arr[i]}! You are employee #${i+1}.`)
  };
  return arr
};


function coinFlip(){
  return Math.random() >= .5
}
function tailsNeverFails(){
  let numTimes = 0
  while (coinFlip() !== false){
    numTimes++

  }
  return `You got ${numTimes} tails in a row!`
};
