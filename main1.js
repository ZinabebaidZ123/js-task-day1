//Q1

var temp = parseInt(prompt("Enter temp"))
let today_temp= temp>= 30 ?"HOT":"COLD";
console.log(today_temp);

// ------------------------Another solution for q1---------------------------------------------------------------
// temp = parseInt(prompt("Enter temp"));
// function checkTemp(){
// let today_temp= temp>= 30 ?"HOT":"COLD";
// console.log(today_temp);
// }
// checkTemp();
// let userTemp = parseInt(prompt("Please Enter Temp"))
// function checkTemp(temp){
//     if(temp >= 30){
//         alert("HOT");
//     }
//     else if(temp < 30){
//         alert("COLD")
//     }
// }
// checkTemp(userTemp);
// -----------------------------------------------------------------------------------------------------
//Q2

let user_name = document.getElementById("userName");
let user_age = document.getElementById("userAge");
let userName = prompt("Enter your name");
let userBirthDate = prompt("Enter Your Birth date");
function userInfo(){

    user_name.innerHTML =  `userName Is : ${userName} `  ;
    console.log(userName);

   if(isFinite(userBirthDate) == true && isNaN(userBirthDate)== false && userBirthDate < 2010){
    var age = 2022 - userBirthDate;
    user_age.innerHTML = `User Age Is : ${age} Years Old`;
    console.log(age);
  }
  
else if(isFinite(userBirthDate) == false&& isNaN(userBirthDate)== true && userBirthDate ){
  for(var i = 0 ; i <=2 ; i++){
    prompt("Enter valid birth date");
  }
}
   }
userInfo();
// ------------------------------------------------------------------------------------------------------

//Q3

function solveEq(){
  let A = parseInt(prompt("Enter first coaffient"));
  let B = parseInt(prompt("Enter sec cooffient"));
  let C = parseInt(prompt("Enter third cooffient"));

  let discriminant = (B*B)-(4*A*C);
  console.log(discriminant)
  let sqrRoot = Math.sqrt(discriminant);
  console.log(sqrRoot);

  let root1 = (-B + sqrRoot ) / (2 * A * C);
  let root2 = (B - sqrRoot ) /( 2 * A * C);
  console.log(root1);
  console.log(root2);
 
  if(discriminant > 0 ){
    console.log("root1 and root2 are reals but have different values");
  }
  else if( discriminant  = 0){
    console.log("The two numbers are reals and have the same value ");
  }
  else{
    console.log("The two numbers are imaginery numbers");
  }
}
solveEq();
// ---------------------------------------------------------------------------------------------------------------
//Q4

//first solution
function getSumLastDigits(){
let num1 = 12 ;
let mod_of_num1 = num1 % 10 ;
let num2 = 13;
let mod_of_num2 = num2 % 10 ;
let result = mod_of_num1 + mod_of_num2;
console.log(result);
}
getSumLastDigits();
// --------------------------------------onother solution for q4-------------------------------------
// var num1 = prompt("Enter first number");
// var num2 = prompt("Enter sec num");
// function sumLastDigit(n , m){
//    var n =  num1.slice(num1.length-1 , num1.length);
//    var m=  num2.slice(num1.length-1 , num2.length);
//    var result = parseInt(n) + parseInt(m);
//    console.log(result);
// }
// sumLastDigit(num1 , num2);
// -------------------------------------------------------------------------------------------------------
//Q5
let d = parseInt(prompt("Enter the distance"));
function getTime(){

let time = d * 2;
console.log(time)
}
getTime();