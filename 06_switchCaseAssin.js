console.log(`Assignment 01.---Using Switch Case---\n`);
function monthOfYear(monthNumber) {
    switch (monthNumber) {
      case 1:
        console.log(`1st Month is: January`);
        break;
      case 2:
        console.log(`------> 2nd  Month is   : February`);
        break;
      case 3:
        console.log(`3rd Month is: march`);
        break;
  
      case 4:
        console.log(`4th Month is: April`);
        break;
  
      case 5:
        console.log(`------> 5th  Month is   : May`);
        break;
  
      case 6:
        console.log(`6th Month is: June`);
        break;
  
      case 7:
        console.log(`7th Month is: July`);
        break;
  
      case 8:
        console.log(`8th Month is: August`);
        break;
  
      case 9:
        console.log(`9th Month is: September`);
        break;
      case 10:
        console.log(`10th Month is: October`);
        break;
  
      case 11:
        console.log(`11th Month is: November`);
        break;
  
      case 12:
        console.log(`------> 12th Month is   : December`);
        break;
  
      default:
        console.log(`Invalid Data of Month   : ${monthNumber}`);
        break;
    }
  }
  monthOfYear(2);
  monthOfYear(5);
  monthOfYear(12);
  monthOfYear(15);
  monthOfYear(100);
  monthOfYear();
  monthOfYear(null);