function countWords(message){
  var substringArray = message.split(" ");
  return substringArray.length;
}

console.log(countWords('Good morning, I love JavaScript.'));

