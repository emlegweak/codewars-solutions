//take a ten minutes walk

function isValidWalk(walk) {
  let north = 0,
      south = 0,
      east = 0, 
      west = 0
  
  if(walk.length == '10'){
    walk.forEach((val) =>{
      if(val == 'n') north++
      else if(val == 's') south++
      else if(val == 'e') east++
      else if(val == 'w') west++
    })
    if((north == south ) && (west == east)) return true
    return false
  }
  return false
}