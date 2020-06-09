const testVar = {}

function superbowlWin(array) {
  let winner = array.find(record => record.result === "W")
  if (!!winner) {return winner.year}
}

