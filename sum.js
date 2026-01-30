//with variables
let a=1;
console.log("the number you have entered is ",a);
console.log();
console.log();
//calling a function
let sum=((a=1,b=2)=>{
	return a+b;
})
console.log(`used the concept call function calling ${sum()}`);
console.log();
console.log();
//with array
let arr=[1,2,3,4,5];
console.log("the elements of an arrays");
arr.forEach((el)=>{
	console.log(el+" ");
})
console.log();
console.log();


// working with the map => creates a new array with some operation
let arr1=[1,2,3,4,5]
let key=5;
let f=arr1.find((el)=>el===key);
console.log(f);