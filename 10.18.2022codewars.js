//greet me
var greet = function(name) {
  name = name.toLowerCase()
 let casedName = name.charAt(0).toUpperCase() + name.slice(1)
 return `Hello ${casedName}!`
};