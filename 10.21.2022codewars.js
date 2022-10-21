//number of people on the bus

var number = function(busStops){
  // Good Luck!
  let passengers = 0
  
  for(let busStop of busStops){
    passengers += busStop[0] - busStop[1]
  }
  return passengers
}