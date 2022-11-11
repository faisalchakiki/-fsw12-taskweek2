function changeA(data){
    let input = data;
    let result = "";
    if( typeof input != "string" || input.length == 0){
        return false;
    }
    for (let i = 0; i < input.length ; i++) {
      if ("a" === input[i]) {
        result += "o";
      }else{
        result += input[i];  
      }
    }
    console.log(result)
  }
  changeA("Jakarta"); //Jokorto
  changeA(13132);// false
  changeA("a");//o
