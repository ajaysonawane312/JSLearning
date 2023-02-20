console.log("---Function Declaration No Arguments and No Return Values---\n");
function learningFunction() {
    console.log("I Love JavaScript\n");
}
learningFunction();
console.log("-----No Arguments and No Return values-----\n");
function simpleFunction() {
    console.log("My Love Is JavaScript\n");
}
simpleFunction();
console.log("=========================================== ");
console.log("--------Declare with Arguments-------");
console.log("============================================");
function personalDetails(firstName, lastName, collegeName) {
    console.log("Personal Details:");
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("College Name:", collegeName);
}
personalDetails("Ajay ", "Sonawane ", "Mudhoji College, Phaltan\n");
console.log("============================================");
console.log("---With Arguments and No Return values---");
console.log("============================================");
console.log("-------Before Swap two Value-- -------");
function swapDataValuesDude(data1, data2) {
    console.log(data1, data2);
    var temp = data1;
    data1 = data2;
    data2 = temp;
    console.log("-------After Swap two Values-------");
    console.log(data1, data2);
}
swapDataValuesDude("virat", "Anushka");

console.log("-------Before Swap two Numbers--------");
function swapValuesDude(value1, value2) {
    console.log(value1, value2);
    var value = value1;
    value1 = value2;
    value2 = value;
    console.log("-------After Swap two Numbers---------");
    console.log(value1, value2);
}
swapValuesDude(1000, 2000);
console.log("============================================ ");
console.log("-----With Arguments and Return values-----");
console.log("============================================ ");
function addThreeValue(value1, value2, value3) {
    console.log("Three Parameters:", value1, value2, value3);
    var addResult = value1 + value2 + value3;
    return addResult;
}
var addResult = addThreeValue(10.23, 600, 40);
console.log("Addition of Three Numbers:", addResult);
console.log("--------Three String Values-------------");
var addStringResult = addThreeValue("Hello", "Good", "Morning");
console.log("Addition of Three Strings:", addStringResult);