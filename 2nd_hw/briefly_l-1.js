function largestRadialSum(arr, d) {
  let n = arr.length;
  let maxHonor = -100;
  let k = n/d;

  for(let i = 0; i < k; i++){
    let curHonor = 0;
    for (let j = i; j < n; j += k){
      curHonor += arr[j];
    }
    if (curHonor > maxHonor){
      maxHonor = curHonor;
    }
  }
  return maxHonor;
}
