function descendingOrder(number) {
  let numStr = number.toString();

  let digits = Array.from(numStr, Number);

  for (let i = 0; i < digits.length; i++) {
    for (let j = i + 1; j < digits.length; j++) {
      if (digits[i] < digits[j]) {
        [digits[i], digits[j]] = [digits[j], digits[i]];
      }
    }
  }

  let result = parseInt(digits.join(''));

  return result;
}
