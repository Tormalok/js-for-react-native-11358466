function processArray(...arr) {
  return arr.map((num) => {
    if (num % 2 == 1) {
      return num * 3;
    } else {
      return num * num;
    }
  });
}

const processedArray = processArray(1, 2, 3, 4, 5);
console.log(processedArray);

function formatArrayStrings(arrOne, arrTwo) {
  return arrOne.map((str, index) => {
    if (arrTwo[index] % 2 == 1) {
      return str.toLowerCase();
    } else {
      return str.toUpperCase();
    }
  });
}

const results = formatArrayStrings(
  ['Carter', 'Stan', 'Homer', 'Jones', 'Webber'],
  processedArray
);

console.log(results);

export { formatArrayStrings, processArray };
