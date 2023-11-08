function getRootProperty(object, val) {
  for(let key in object){
    if (typeof object[key] === 'object' && getRootProperty(object[key], val)){
      return key;
    } else if (object[key] === val) return key;
  }
  return null;
}
