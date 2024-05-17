import { formatArrayStrings, processArray } from './arrayManipulation.js';

function createUserProfile(arrOne, arrTwo) {
  let id = 1;

  return arrOne.map((str, index) => {
    return {
      id: id++,
      originalName: str,
      modifiedName: arrTwo[index],
    };
  });
}

const formattedArrayStrings = formatArrayStrings(
  ['Carter', 'Stan', 'Homer', 'Jones', 'Webber'],
  processArray(1, 2, 3, 4, 5)
);

const profiles = createUserProfile(
  ['Jakes', 'Drake', 'Matts'],
  formattedArrayStrings
);

console.log(profiles);
