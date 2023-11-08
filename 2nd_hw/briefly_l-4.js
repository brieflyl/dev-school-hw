function unpackSausages(truck) {
  let sausages = [];
  let i = 1;
  for(const packages of truck){
    for(const box of packages){
      if (box.length !== 6) continue;
      if (box[0] !== "[" || box[5] !== "]") continue;
      if (box[1] !== box[2] || box[1] !== box[3] || box[1] !== box[4]) continue;
      if (i++ % 5 === 0) continue;

      sausages.push(...box.slice(1, 5).split(""));
    }
  }
  return sausages.join(" ");
}
