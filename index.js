const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  if (array.find( ({result}) => result === "W")) {
    const winningYear =  array.find( ({result}) => result === "W").year
    return winningYear
  } else {
    return undefined
  }
  // const year = winningYear.year
}
