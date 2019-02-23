// add solution here
function theBeatlesPlay (musicians, instruments) {
  var ary = [];
  for (var i = 0; i < musicians.length; i++)  {
    str = `${musicians[i]} plays ${instruments[i]}`
    ary.push(str)
  }
  return ary
}

function johnLennonFacts(facts) {
  var ary = []
  i = 0
  while(i < facts.length){
    str = `${facts[i]}!!!`
    ary.push(str)
    i++
  }
  return ary
}

function iLoveTheBeatles(num){
  var ary = []
  do {
    ary.push("I love the Beatles!")
    num++
  } while(num < 15)
  return ary
}