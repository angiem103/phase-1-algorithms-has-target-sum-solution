// function hasTargetSum(array, target) {
//   // iterate over the array of numbers
//   for (let i = 0; i < array.length; i++) {
//     // for the current number, identify a complementary number that adds to our target
//     // (for example: if our number is 2, and the target is 5, the complementary number is 3)
//     const complement = target - array[i];
//     // iterate over the remaining numbers in the array
//     for (let j = i + 1; j < array.length; j++) {
//       // check if any of the remaining numbers is the complement
//       // if so, return true
//       if (array[j] === complement) return true;
//     }
//   }
//   // if we reach the end of the array, return false
//   return false;
// }

//ANOTHER SOLUTIOIN

function hasTargetSum(array, target) {
  // create an object to keep track of all the numbers we've seen
  const seenNumbers = {};
  // iterate over the array of numbers
  for (const number of array) {
    // for the current number, identify a complementary number that adds to our target
    // (for example: if our number is 2, and the target is 5, the complementary number is 3)
    const complement = target - number;
    // check if any of the keys in our object is the complement to the current number
    // if so, return true
    if (seenNumbers[complement]) return true;
    // save the current number as the key on our object so we can check it later against other numbers
    seenNumbers[number] = true;
  }
  // if we reach the end of the array, return false
  return false;
}
/* 
  Write the Big O time complexity of your function here
  Since our ineer loop performs n iterations for every iteration of the outer loo, we end up with O(n*n) or 0(n*2(squared)) for the time complexity algorithm
  the amount of memory needed grows linearly with the size of the input array, we dont need to create additional data statructures to store this info so we end up with O(n)
*/

/* 
  Add your pseudocode here
  iterate over the array of numbers
    for the current number, identify a complementary number that adds to our target (for example: if our number is 2, and the target is 5, the complementary number is 3)
      iterate over the remaining numbers in the array
        check if any of the remaining numbers is the complement 
          if so, return true
          if we reach the end of the array, return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log('')

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

// I neeed to make a function that checks if two numbers in an array add up to a target number. For example if array is [1,2,3,4] and target is 6, I know that 2 plus 4 equals 6 so i need to return true. If the target was 10 then i need to retunrn false since none of the numbers add up to 10