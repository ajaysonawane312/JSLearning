console.log(`-------------------------------------------Assignment B------------------------------------------`);
console.log(`-----------Count the Total Number of Words in Given String and Calculate the Factorial-----------\n`);
function factorialofWordsCount(str){
   var count=1;
   if ((typeof str!="string") || str == '""') {
      return `----> Given String is: ${str} : Invalid Data`;
  }
       var char = str.split(" ");
       wordLength= char.length;
       for (let i = wordLength; i >=1; i--) {
         count=count * i;
       }
    return `----> Given String is: ${str} : Total Words is: ${wordLength}: Factorial is: ${count}`;
  } 
  var result=factorialofWordsCount("Revision is the mother of success");
  console.log(result);
  var result=factorialofWordsCount("We never fail, we always learn");
  console.log(result);
  var result=factorialofWordsCount(`""`);
  console.log(result);
  var result=factorialofWordsCount(null);
  console.log(result);
  var result=factorialofWordsCount("Ajay Ramchandra Sonawane")
  console.log(result);
  console.log(`--------------------------------------------------------------------------------------------------`);
