//Predict your age!
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let ages = [age1, age2, age3, age4, age5, age6, age7, age8]
  return Math.floor(Math.sqrt(ages.map((x) => x*x).reduce((sum, current) => sum + current, 0))/2)
}