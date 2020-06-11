function superbowlWin(arrayOfObj){
 let result = arrayOfObj.find(record => record.result === "W")
 console.log(result)
if (result){
  return result.year
} else {
  return undefined
}
}