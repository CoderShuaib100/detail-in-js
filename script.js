var msg = "Hi,how are you from?";

var searcher = msg.search("you");

var RefinedText = msg.replace("you","you,Where are you");

document.getElementById("text1").innerHTML = msg;
document.getElementById("text2").innerHTML = searcher;
document.getElementById("text3").innerHTML = RefinedText;

// checking the method for changing data types
var x = 30;
var y = 40;

document.write("Adding the digits: " + x + y);
document.write("<br> Adding the digits as strings: "+String(x)+String(y));

// trying the try and catch functions

try{
    document.writer("Shuaib is a good boy.");
}

catch(err){
    document.write("<br>"+err.message);
}

// changing the condition to true

try{
    document.write("<br> Shuaib is a good boy.");
}

catch(err){
    document.write("<br>"+err.message);
}

// the sum of two imputs

function adder(a,b) {
    return a + b;
}

document.write("<br>"+adder(10,50));


add = (a,b) => a + b;

document.write("<br> The Sum of 3 and 7 = "+add(3,7));

sub = (a,b) => a-b;

document.write("<br> The Difference between 198 and 140 = "+sub(198,140));

divider = (a,b) => a/b;

document.write("<br> The division of 100 and 25 = "+divider(100,4));

multiplyer = (a,b) => a*b;

document.write("<br> The Product of 29 and 12 = "+multiplyer(29,12));

RemainderFinder = (a,b) => a%b;

document.write("<br> The Remainder of 60 and 12 = "+RemainderFinder(60,12));