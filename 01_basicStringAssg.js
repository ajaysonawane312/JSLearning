console.log("================Function with No Arguments and No Return Type===============\n");
function stringBasics() {
    var company = "TCS"
    console.log("1. My Dream Company is:", company);
    console.log("----------------------------------------------------------------------------");
    console.log("2.==============Create Three Variables hobby1, hobby2, hobby3===============\n");
    var hobby1 = "Reading Books";
    var hobby2 = "Playing Cricket";
    var hobby3 = "Listening Songs";
    console.log("2.1. My Hobbies are: 1.",hobby1,"2.",hobby2,"3.",hobby3);
    console.log("-----------------------------------------------------------------------------");
    var hobbyLengthOne = hobby1.length;
    var hobbyLengthTwo = hobby2.length;
    var hobbyLengthThree = hobby3.length;
    console.log("Total Number of Character Hobby1:", hobbyLengthOne);
    console.log("Total Number of Character Hobby2:", hobbyLengthTwo);
    console.log("Total Number of Character Hobby3:", hobbyLengthThree);
    console.log("-----------------------------------------------------------------------------");
    console.log("=======Sum of the Total Number of Character in hobby1, hobby2, hobby3========");
    var addResult = hobbyLengthOne + hobbyLengthTwo + hobbyLengthThree;
    console.log("2.2. Addition of Character in Hobby1, Hobby2, Hobby3 is:", addResult);
}
stringBasics();



