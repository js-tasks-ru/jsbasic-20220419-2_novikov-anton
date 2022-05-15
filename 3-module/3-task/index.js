function camelize(str) {
  let arrStr = str.split("-");
  arrStr = arrStr.map(function(word, index) {
    if (index === 0) {
      return word;
    }
    return word[0].toUpperCase() + word.slice(1);
  });
  return arrStr.join("");
}
