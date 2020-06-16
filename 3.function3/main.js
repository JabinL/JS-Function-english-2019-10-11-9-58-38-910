function alphabetSort(message){
	
	var str= message.split("");
	var str1= str.sort();
	return str1.join("");
}

console.log(alphabetSort('hello'));