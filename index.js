// const testVar = {}

// function testFunc() {
//   return "hi"
// }

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]


function superbowlWin(record) {
  const winningSeason = record.find(({result}) => result === 'W');
  if (winningSeason) {
    return winningSeason.year
  } else {
    return undefined
  }
}