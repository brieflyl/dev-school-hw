function groupAnagrams(arr){
  let groups = {};

  for(let element of arr){
    let key = element.split('').sort().join('');
    if(groups[key]){
      let result = groups[key].push(element);
    }
    else {
      groups[key] = [element];
    }
  }

  return Object.values(groups);
}
