console.log(`Assignment------------------Function Expression With using For Loop--------------------\n`);
console.log(`Step 1.-------------------------Count the Total Number of Vowels-----------------------\n`);
var wordsCharsCount = function(str){
// Print the vowels only aeiou or AEIOU
var counter = 0;
for (let index = 0; index < str.length; index++) {
    var char = str.charAt(index);
    var charCopy = char.toLowerCase();
    if (charCopy=='a' || charCopy=='e' || charCopy=='i' || charCopy=='o' || charCopy=='u') {
        // console.log(char);
        counter = counter +1;
    }   
}
return `----> ${str} : Total vowels in string is : ${counter}`;
}
var result=wordsCharsCount("JavaScript is the language Of Internet");
console.log(result);
var result=wordsCharsCount("I am Angular Developer");
console.log(result);
var result=wordsCharsCount("Hard work and commitment is the key of success");
console.log(result);
console.log(`======================================================================================`);
console.log(`Step 2.-----------------Count the Total Character in the last Word-------------------- \n`);
function lastWordCharsCount(char) {
    var count = 0;
    for (let index = char.length - 1; index >= 0; index--) {
      var str = char.charAt(index);
      if (str == " ") {
        break;
      }
  
      count = count + 1;
    }
  
    return count;
  }
  var final=lastWordCharsCount("JavaScript is the language Of Internet");
  console.log(`Given String is: JavaScript is the language Of "Internet"`);
  console.log(`----> Total Character in the last Word is: ${final}`);
  var final=lastWordCharsCount("I am Angular Developer");
  console.log(`Given String is: I am Angular "Developer"`);
  console.log(`----> Total Character in the last Word is: ${final}`);
  var final=lastWordCharsCount("Hard work and commitment is the key of success");
  console.log(`Given String is: Hard work and commitment is the key of "success"`);
  console.log(`----> Total Character in the last Word is: ${final}`);
  console.log(`---------------------------------------------------------------------------------------`);