console.log(`---------Assignment 02: Function 'stringHandsOn' with No Arguments and No Return value---------\n`);
function stringHandsOn(){
    var string ="     Hey you are doing good, keep it up    ";
    console.log(`1. Given String is: "${string}"`);
    var stringLength = string.length;
    console.log(`2. Length of String is: ${stringLength}`);
    var removeSpace = string.trim();
    console.log(`3. Remove the leading and trailing extra spaces Result is: "${removeSpace}"`);
    var temp = removeSpace.length;
    console.log(`3.1. After Remove the leading and trailing extra spaces length is: ${temp}`);
    var spaceCount=stringLength-removeSpace.length;
    console.log(`4. Total Number of Removed Extra Spaces count is: ${spaceCount}`);
    console.log(`5. First and Last Character in the given String:`);
    console.log(`5.1. First Char is: "${removeSpace.charAt(0)}"`);
    console.log(`5.2. Last Char is: "${removeSpace.charAt(removeSpace.length-1)}"`);
    var totalWords=removeSpace.split(" ");
    var wordCount=totalWords.length;
    console.log(`6. Total Words Given String is: ${wordCount}`);
    var index=removeSpace.indexOf("good");
    console.log(`7. Index of Words "good" is: ${index}`);
    console.log(`8.1. Substring Starting from Index 22 using substring() is: "${string.substring(22)}"`);
    console.log(`8.2. Substring Starting from Index 22 using slice() is: "${string.slice(22)}"`);
    var endsChar=removeSpace.endsWith("up");
    console.log(`9. Is String ends with word "up": ${endsChar}`);
    var startsChar=removeSpace.startsWith("Hey")
    console.log(`10. Is String starts with word "Hey": ${startsChar}`);
}
stringHandsOn();