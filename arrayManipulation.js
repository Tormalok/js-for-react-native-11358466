function processArray(...arr) {
  return arr.map((num) => {
    if (num % 2 == 1) {
      return num * 3;
    } else {
      return num * num;
    }
  });
}

const results = processArray(1, 2, 3, 4, 5);
console.log(results);
