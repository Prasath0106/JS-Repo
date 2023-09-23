// var a=2002,b=2023
// document.write("I will be either ",b-a," or ",b-a+1 ," in ",b)

// if (a>b){
//     alert("a is greater")
// }
// else{
//     alert("b is greater")
// }
// var a=20,b=10;
// if(a==b){
//     document.write("a is greater")
// }
// else if(a==b){
//     document.write("b is greater")
// }
// else{
//     document.write("a and b are equal")
// }

var sum=0;
for (var x=0; x<=10; x++)
{
    if (x%3===0 || x%5===0)
    {
       sum+=x;
    }
}
document.write(sum);