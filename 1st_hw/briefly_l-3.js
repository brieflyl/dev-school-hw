function findNb(m){
  let k = 1;
  let n = 0;

  while(n <= m){
    n += k ** 3;
    if (n === m) return k;
    k += 1;
  }
  return -1;
}
