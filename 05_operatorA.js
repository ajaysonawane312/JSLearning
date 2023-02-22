console.log(`1. ------------Given Strings Length And its Square-------------`);
function squreOfWordLength(string){
var stringLength=string.length;
console.log(`1.1 Given String is: ${string}`);
console.log(`1.2 JavaScript Length is: ${stringLength}`);
console.log(`1.3 Square of Length is: ${stringLength**2}`);
console.log(`===============================================================`);
}
squreOfWordLength("JavaScript");
squreOfWordLength("Google Chrome");
squreOfWordLength("Developer Smart");
console.log(`2.------ Write Function With No Args And No Return Values------`);
console.log(`===============================================================`);
function mulString(){
    var string = "I am Angular Developer";
    console.log(`==> Given String is: ${string}`);
    
    var totalLength=string.length;
    console.log(`==> Length of String is: ${totalLength}`);

    var totalWords=string.split(" ");
    var resultWords=totalWords.length;
    console.log(`==> Total Words in Given String is: ${resultWords}`);
    console.log(`===============================================================`);
    var divideResult=totalLength/totalWords.length;
    console.log(`2.1 Sting Length Divided by Total Words is: ${divideResult}`);
    var mulResult=totalLength*totalWords.length;
    console.log(`2.2 Sting Length Multiple by Total Words is: ${mulResult}`);
}
mulString();
