//https://leetcode.com/problems/baseball-game/description/

// You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:
// An integer x.
// Record a new score of x.
// '+'.
// Record a new score that is the sum of the previous two scores.
// 'D'.
// Record a new score that is the double of the previous score.
// 'C'.
// Invalidate the previous score, removing it from the record.
// Return the sum of all the scores on the record after applying all the operations.

//My solution
/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (ops) {
  let record = []

  for (let i = 0; i < ops.length; i++) {
    if (!isNaN(ops[i])) {
      record.push(+ops[i])

    } else if (ops[i] === 'C') {
      record.pop()

    } else if (ops[i] === 'D') {
      record.push(record[record.length - 1] * 2)
      
    } else if (ops[i] === '+') {
      record.push(record[record.length - 1] + record[record.length - 2])
    }
  }
  return record.reduce( (acc, c) => acc + c, 0 )
};


console.log(calPoints(["5", "2", "C", "D", "+"])) //30

console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"])) //27

console.log(calPoints(["1", "C"])) //0

