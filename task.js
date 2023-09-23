// function add(a){
//     return a
// }
// document.write(add("peacock"))

// function greet() {

//     return "Hello! Have a nice day";
  
//   }
//   document.write(greet())

// function add(a,b) {
//     return a+b 
// }
// document.write(add(10,200))

// function add(a,b) {
//     return (a+b)/2 
// }
// document.write(add(4,2))

// function add(a) {
//    document.write("Hi ",a)
// }
// (add("Aravind kumar"))

// function add(b){
//     return b*60
// }
// document.write(add(5))

// for(a=1;a<=100;a++){ 
//     if(a%3==0){
//         document.write(a,"Fizz ","<br>");
//      }
//      else if(a%5==0){
//         document.write(a,"Buzz","<br>");
//      }
//      else{
//         document.write(a,"<br>");
//      }
// }

// var a=prompt("Enter First Number");
// var b=prompt("Enter Second Number");
// var c=prompt("Enter Third Number");
// function number(){
//     if (a>b && a>c){
//         document.write("A is Greater")
//     }
//     else if(b<c){
//         document.write("C is Greater")
//     }
//     else{
//         document.write("Print Number Three")
//     }
// }
// (number())

// var a=prompt("Enter side1");
// var b=prompt("Enter side2");
// var c=prompt("Enter side3")
// function findTraingleType(){
//     if(a==b && a==c && b==c){
//         document.write("Equailent Traingle")
//     }
//     else if(b==c || a==b){
//         document.write("Isosceles traingle")
//     }
//     else{
//         document.write("Scalane traingle")
//     }
// }
// (findTraingleType())

// var num=prompt("Enter the num");
// var start=prompt("Enter the start");
// var range=prompt("Enter the range");
// function checkInRange(){
//     if(num>=start && num<=range){
//         document.write("Between the range");
//         document.write("<br>");
//     }
//     else{
//         document.write("Outside the range")
//     }
// }
// (checkInRange())

// function my(){
//     var a=5;
//      b=6;
     
//      let numq= prompt("Enter a operater")
//     switch(numq){
//     case "add":
//        let add=a+b;
//         console.log(add);
//         break;
//     case "sub":
//         let sub=a-b;
//         console.log(sub);
//         break;
//     case "division":
//         let div=a/b;
//         console.log(div);
//         break;
//     case "modulus":
//         let mol=a%b;
//         console.log(mol);
//         break;
//     case "mulp":
//         let mulp=a*b;
//         console.log(mulp);
//         break;
//     default:
//         console.log = "invaild";
//     }   

//     }
//     my()

// function checkLeapYear(){
//     var Year=prompt("Enter the year")
//     if((Year%4==0 && Year%100!=0 || Year%400==0)){
//         document.write( Year,"is a Leap year")
//     }
//     else{
//         document.write(Year,"is not a leap year")
//     }
// }checkLeapYear()

// function findGrade(){
//     var mark=prompt("Enter the mark")
//     if(mark>=90 && mark<=100){
//         document.write("Sgrade")
//     }
//     else if(mark>=80 && mark<90){
//         document.write("A grade")
//     }
//     else if(mark>=70 && mark<80){
//         document.write("B grade")
//     }
//     else if(mark>=60 && mark<70){
//         document.write("C grade")
//     }
//     else if(mark>=50 && mark<60){
//         document.write("D grade")
//     }
//     else if(mark>=40 && mark<50){
//         document.write("E grade")
//     }
//     else if(mark>=0 && mark<40){
//         document.write("Student has failed")
//     }
//     else{
//         document.write("Invalid Marks")
//     }
// }
// findGrade()

// var month=prompt("enter a month")
// var year=prompt("enter a year")
// function isLeapYear(){

//     return (((year%4 == 0)&&(year%100 != 0))||(year%400 == 0));
//   }
//   document.write(isLeapYear())
//   function findDaysInMonth() {
  
//     if(month < 1 || month > 12){
//       document.write("Invalid Month of value")
//       return;
//     }
//     if(month==2){
//       if(isLeapYear()){
//          document.write("The Month has 29 days")    
//       }
//       else{
//          document.write("The Month has 28 days")    
//       }
//     }
//     else if(month == 4 || month == 6 || month == 9 || month== 11){
//        document.write("The Month has 30 days")    
//     }
//     else{
//        document.write("The Month has 31 days")
//     }
//   }
  
//   findDaysInMonth()


var month=prompt("enter a month")
var year=prompt("enter a year")
function isLeapYear(){

    return (((year%4 == 0)&&(year%100 != 0))||(year%400 == 0));
  }
  document.write(isLeapYear())
  function findDaysInMonth() {
  
    if(month < 1 || month > 12){
      document.write("Invalid Month of value")
      return;
    }
    if(month==2){
      if(isLeapYear()){
         document.write("The Month has 29 days")    
      }
      else{
         document.write("The Month has 28 days")    
      }
    }
    else if(month == 4 || month == 6 || month == 9 || month== 11){
       document.write("The Month has 30 days")    
    }
    else{
       document.write("The Month has 31 days")
    }
  }
  
  findDaysInMonth()