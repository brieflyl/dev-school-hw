class Vector {
  constructor(cords){
    this.cords = cords;
  }

  check(b){
    if (this.cords.length !== b.cords.length) throw new Error();
  }

  add(b){
    this.check(b);
    let newcords = [];
    for(let i = 0; i < this.cords.length; i++){
      newcords[i] = this.cords[i] + b.cords[i];
    }
    return new Vector(newcords);
  }
  subtract(b){
    this.check(b);
    let newcords = [];
    for(let i = 0; i < this.cords.length; i++){
      newcords[i] = this.cords[i] - b.cords[i];
    }
    return new Vector(newcords);
  }
  dot(b){
    this.check(b);
    let dot1 = 0;
    for(let i = 0; i < this.cords.length; i++){
      dot1 += this.cords[i] * b.cords[i];
    }
    return dot1;
  }
  norm(){
    let result = 0;
    for(let i = 0; i < this.cords.length; i++){
      result += Math.pow(this.cords[i], 2);
    }
    result = Math.sqrt(result);
    return result;
  }
  toSring(){
    return `(${this.cords.join(',')})`;
  }
  equals(b){
    if(this.cords.lenght === b.cords.lenght){
      return true;
    }
    return false;
  }
}
