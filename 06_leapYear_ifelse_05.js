console.log(`Assignment 02.---Function Expression with if else block---\n`);
console.log(`-----------Check Leap Year--------------------------------\n`);
var checkLeapYear=function leapYear(year) {
    if (year%4==0 && year!==null) {
        console.log(`--> Year : ${year} : is a leap year`);
        return;
    } 
    if (year%4!==0 && year/100) {
        console.log(`--> Year : ${year} : is not a leap year`);
        return;
    }
    if ((typeof year=="number") || isNaN(Number)) {
        console.log(`--> Year : ${year} ---> Invalid Type of Year`);
        return;
    }
}
// take input
checkLeapYear(2020);
checkLeapYear(1999);
checkLeapYear(1600);
checkLeapYear(2022);
checkLeapYear(1945);
checkLeapYear(null);
checkLeapYear("Twenty Twenty");
checkLeapYear(undefined);
checkLeapYear(NaN);
checkLeapYear(1750);
