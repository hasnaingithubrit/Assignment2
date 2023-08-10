"use strict";
// Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.//
const c = 98;
const symbol = "\u00B0";
console.log((c - 32) * 5 / 9 + symbol);
// write a program to calculate the percentage//
let f = 500;
let b = 445;
let percentage = (b / f) * 100;
console.log(`${percentage}%`);
//  Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.//
let totalDays = 17;
let weeks = (totalDays / 7);
let remainingDays = totalDays % 7;
let result = (`${weeks}weeks,${remainingDays}days`);
console.log(result);
// Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount//
let price = 78;
let discount = price / 100 * 10;
let discount2 = price / 100 * 5;
if (price >= 100) {
    console.log(price - discount);
}
else {
    console.log(price - discount2);
}
// Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."//
let a = 6;
if (a > 0 && a <= 12) {
    console.log("Child");
}
else if (a >= 13 && a <= 19) {
    console.log("Teenager");
}
else {
    console.log("Adult");
}
// Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.//
let tem = 2;
if (tem > 15) {
    console.log("warm clothes");
}
else {
    console.log("cold clothes");
}
// Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly
let dividedNumber = 5;
let divided3 = dividedNumber % 3;
let divided5 = dividedNumber % 5;
if (divided3 == 0 && divided5 == 0) {
    console.log(`The Number ${dividedNumber}divided by 3,5`);
}
else if (divided3 == 0) {
    console.log(`The Number ${dividedNumber}divided by 3`);
}
else if (divided5 == 0) {
    console.log(`The Number ${dividedNumber}divided by 5`);
}
else {
    console.log(`The Number ${dividedNumber} not divided by 3,5`);
}
// Write a program that checks if the given year is leap year or not.
let givenYear = prompt("Enter a number");
let year = 365;
let LeapYear = 366;
if (year % 4) {
    console.log("Leap Year");
}
else {
    console.log("Not a Leap Year");
}
//  - Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.
let dayOfWeak = 5;
if (dayOfWeak <= 7) {
    if (dayOfWeak == 1) {
        console.log("Saturday");
    }
    if (dayOfWeak == 2) {
        console.log("Sunday");
    }
    if (dayOfWeak == 3) {
        console.log("Monday");
    }
    if (dayOfWeak == 4) {
        console.log("Tuesday");
    }
    if (dayOfWeak == 5) {
        console.log("Thursday");
    }
    if (dayOfWeak == 6) {
        console.log("Friday");
    }
}
// Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax//
var consumedUnit = 450;
var unitPrice = 20;
var amount = consumedUnit * unitPrice;
if (consumedUnit > 100 && consumedUnit < 200) {
    console.log((amount * 10) / 100 + amount);
}
else if (consumedUnit > 200 && consumedUnit < 500) {
    console.log((amount * 15) / 100 + amount);
}
else {
    console.log((amount * 25) / 100 + amount);
}
