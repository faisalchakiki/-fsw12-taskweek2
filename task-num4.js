function palindrom(data) {
  let input = data.toLowerCase();
  let result = "";
  if(input.length <= 2 ){
    console.log("fill more than 2 letters`")
    return false;
  }
  for (let i = input.length - 1; i >= 0; i--) {
      result += input[i];
  }
  if( result == input){
    console.log("palindrom")
  }else{
    console.log("this text is not a palindrome")
  }
}
palindrom("hello")
palindrom("malam")
palindrom("Aibohphobia")
palindrom("212")

