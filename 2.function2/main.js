function palindrome(message){
  var begin = '';
  var end = '';
  for( var i=0, j=message.length-1; i<j; i++,j--){
	
	if(message.charAt(i) != message.charAt(j)){
		return false;
	}
  }
  return true;
  
}