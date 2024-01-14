let vowelArr=["a","e","i","o","u"]
function encode(string) {
  let changeVowelToNumber = x => {
    return vowelArr.includes(x) ? (vowelArr.indexOf(x)+1).toString() : x
  }
  return string.split("").map(changeVowelToNumber).join("")
}

function decode(string) {
  let changeNumberToVowel = x =>{
    return isNaN(x) ? x : x==" " ? x : vowelArr[Number(x)-1]
  }
  return string.split("").map(changeNumberToVowel).join("")
}

function encode(string){
  return string.replace(/[aeiou]/g, function (x) { return '_aeiou'.indexOf(x) });
}

//turn numbers back into vowels
function decode(string){
  return string.replace(/[1-5]/g, function (x) { return '_aeiou'.charAt(x) });
}
