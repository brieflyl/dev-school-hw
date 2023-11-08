function findEvenIndex(arr)
{
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let sum1 = 0;
    let sum2 = 0;

    for (let j = 0; j < i; j++){
      sum1 += arr[j];
    }

    for (let j = i + 1; j < n; j++){
      sum2 += arr[j];
    }

    if (sum1 === sum2){
      return i;
    }
  }

  return -1;
}
