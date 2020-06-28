function convertToRoman(num) 
{
    var x = document.getElementById("name");
    var num = Number(x.value);
    var romanArray = [];   


    while (num >= 1000){
        romanArray.push("M");
        num -= 1000;
    }
    while (num >= 900){        
        romanArray.push("CM");
        num -= 900;
    }
    while (num >= 500){        
        romanArray.push("D");
        num -= 500;
    }
    while (num >= 400){
        romanArray.push("CD");
        num -= 400;
    }
    while (num >= 100){
        romanArray.push("C");
        num -= 100;
    }
    while (num >= 90){        
        romanArray.push("XC");        
        num -= 90;
    }
    while (num >= 50){
        romanArray.push("L");
        num -= 50;
    }
    while (num >= 40){
        romanArray.push("XL");
        num -= 40;
    }
    while (num >= 10){
        romanArray.push("X");
        num -= 10;
    }
    while (num >= 9){
        romanArray.push("IX");
        num -= 9;
    }
    while (num >= 5){
        romanArray.push("V");
        num -= 5;
    }
    while (num >= 4){
        romanArray.push("IV");
        num -= 4;
    }
    while (num >= 1){
        romanArray.push("I");
        num -= 1;
    }
    var romanString = romanArray.join('');
    alert(romanString);
    return romanString;
  }
