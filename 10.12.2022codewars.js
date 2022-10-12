//alphabet war

function alphabetWar(fight){
 let leftScore = {
    w : 4,
    p : 3,
    b : 2,
    s : 1,
 }
 let rightScore = {
   m : 4,
   q : 3,
   d : 2,
   z : 1,
 }
 let leftSum = 0
 let rightSum = 0
 
 for(let i = 0; i < fight.length; i++){
   let letter = fight[i]
   if (rightScore[letter]){
     rightSum += rightScore[letter]
   }else if(leftScore[letter])
     leftSum += leftScore[letter]
 }
  if(rightSum > leftSum){
    return "Right side wins!"
  }else if(leftSum > rightSum){
    return "Left side wins!"
  }else{
    return "Let's fight again!"
  }
}