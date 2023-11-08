function highAndLow(numbers){
  numbers = numbers.split(' ');
  let min = parseInt(numbers[0]);
  let max = parseInt(numbers[0])

  for (let i = 0; i < numbers.length; i++) {
    let currentNum = parseInt(numbers[i]);

    if (currentNum < min){
      min = currentNum;
    }

    if (currentNum > max){
      max = currentNum;
    }
  }
  return max + " " + min;
}
