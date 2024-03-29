//You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.
//For example:
//dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
//dup(["kelless","keenness"]) = ["keles","kenes"].
//Strings will be lowercase only, no spaces 
//dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])
//dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese'])
//dup(["kelless","keenness"]), ['keles','kenes'])

function dup(s) {
  s = String(s)
  s = s.split('').filter((w,i)=> w !== s.split('')[i+1]).join('')
  return s.split(',')
};