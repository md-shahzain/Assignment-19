// Problem no 1

// var a = 10;
// document.write("The value of a is: " + a + "<br>");

// document.write("The value of ++a is: " + (++a) + "<br>");
// document.write("Now the value of a is: " + a + "<br>");

// document.write("The value of a++ is: " + (a++) + "<br>");
// document.write("Now the value of a is: " + a + "<br>");

// document.write("The value of --a is: " + (--a) + "<br>");
// document.write("Now the value of a is: " + a + "<br>");

// document.write("The value of a-- is: " + (a--) + "<br>");
// document.write("Now the value of a is: " + a + "<br>");


// Problem no 2

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;

// // Step by step:
// --a = 1;
// --b = 0;
// ++b = 1;
// b-- = 1; ("but b become 0 after this");

// result = 1 - 0 + 1 + 1;


// Problem no 3

// var name = prompt("Enter username:");
// var Email = prompt("Enter Email:");
// var Password = prompt("Enter Password:");

// alert("Hello" + name + "Welcome");



// Problem no 4 

// let number = prompt("Enter a number for multiplication table:" , 5);
// document.write("<h3>Multiplication Table of " + number + "</h3>");

// for( let i = 1; i <= 10; i++ ){
//     document.write(number + "x" + i + "=" + (number * i) + "<br>")
// };

// Problem no 4 

// var sub1 = prompt("Enter first subject name:");
// var sub2 = prompt("Enter Second subject name:");
// var sub3 = prompt("Enter Third subject name:");
// var totalMarks  = 100;


// var marks1 = +prompt("Enter marks for " + sub1); 
// var marks2 = +prompt("Enter marks for " + sub2);
// var marks3 = +prompt("Enter marks for " + sub3); 



// var totalObtained = marks1 + marks2 + marks3;
// var percentage = (totalObtained / 300) * 100;

// document.write("<table border='1'>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
// document.write("<tr><td>" + sub1 + "</td><td>100</td><td>" + marks1 + "</td></tr>");
// document.write("<tr><td>" + sub2 + "</td><td>100</td><td>" + marks2 + "</td></tr>");
// document.write("<tr><td>" + sub3 + "</td><td>100</td><td>" + marks3 + "</td></tr>");
// document.write("<tr><th colspan='2'>Total</th><th>" + totalObtained + "</th></tr>");
// document.write("</table>");
// document.write("<br>Percentage: " + percentage + "%");


