function getMinMax(str) {
  const arrStr = str.split(' ');
  const arrNumbers = arrStr.map(Number);
  const filteredNumbers = arrNumbers.filter((number) => !isNaN(number));
  return {min: Math.min(...filteredNumbers), max: Math.max(...filteredNumbers)};
}
