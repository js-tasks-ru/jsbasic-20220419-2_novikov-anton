function sumSalary(salaries) {
  const values = Object.values(salaries);
  let sum = 0;
  
  for (let i = 0; i < values.length; ++i) {
    if (typeof values[i] !== "number") {
      continue;
    } 
    if (isNaN(values[i]) || !isFinite(values[i])) {
      continue;
    }
    sum += values[i];
  }

  return sum;
}