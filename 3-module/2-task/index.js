function filterRange(arr, a, b) {
  return arr.filter(function(number) {
    return number >= a && number <= b;
  });
}
