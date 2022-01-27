function quickCheck(arr, elem) {
  // Only change code below this line
  if (!arr.indexOf(elem)) {
    return true, console.log(true)
  } else {
    return false, console.log(false)
  }
  // Only change code above this line
}

quickCheck(['squash', 'onions', 'shallots'], 'mushrooms')
console.log('quickCheck: ', quickCheck([]))

// The quickCheck function should return a boolean (true or false), not a string ("true" or "false")

quickCheck(["squash", "onions", "shallots"], "mushrooms") // should return false
console.log('quickCheck: ', quickCheck([]))

quickCheck(["onions", "squash", "shallots"], "onions") // should return true
console.log('quickCheck: ', quickCheck([]))

quickCheck([3, 5, 9, 125, 45, 2], 125) // should return true
console.log('NNquickCheck: ', quickCheck())

quickCheck([true, false, false], undefined) // should return false
console.log('quickCheck: ', quickCheck([]))

// The quickCheck function should utilize the indexOf() method
