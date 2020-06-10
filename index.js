// const testVar = {}

// function testFunc() {
//   console.log("hey")
// }

// testFunc()

// PROBLEM: Given a record object of properties: year and results. Return the year where result == "W"
// WHITEBOARD: 
// // create a function called superbowlWin that takes in an array of objects
// // find the year where result = "W"
// // return year where result = "W" is found, otherwise return undefined
// INPUTS/OUTPUTS:
// // inputs: array of objects
// // outputs: a string

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]

function superbowlWin(record) {
  let found = record.find(record => record.result === "W")
  if(found){
    return found.year
  } else {
    return undefined
  }
}

superbowlWin(record)