// Result Average value

const bInd = 90 ; 
const bIng = 70 ; 
const Math = 90 ; 
const IPA = 60 ;

let result = (bInd + bIng + Math + IPA) / 4;
if (bInd == null || bIng == null || Math == null || IPA == null) {
  console.log("fill in all values");
  return false;
}
if (result >= 90 && result <= 100) {
  console.log(`Grade : A with value ${result}`);
} else if (result >= 80 && result < 90) {
  console.log(`Grade : B with value ${result}`);
} else if (result >= 70 && result < 80) {
  console.log(`Grade : C with value ${result}`);
} else if (result >= 60 && result < 70) {
  console.log(`Grade : D with value ${result}`);
} else {
  console.log(`Grade : E with value ${result}`);
}
