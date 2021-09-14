//premitive data type vs oop;
//ref: https://js.zonayed.me/advance/post-2
//Premitive data type ex.

/*  var a = 10,
   b = 20;
 
 console.log("Before swap: Value of a: " + a + " and value of b: " + b);
 
 function swap(a, b) {
   console.log(
     "Before Swap inside function: Value of a: " + a + " and value of b: " + b
   );
   var temp = a;
   a = b;
   b = temp;
   console.log(
     "After Swap inside function: Value of a: " + a + " and value of b: " + b
   );
 }

  swap(a, b);
  console.log("After swap: Value of a: " + a + " and value of b: " + b);
  */

//oop ex.
var obj = {
  a: 10,
  b: 20,
};

console.log("Before swap: Value of a: " + obj.a + " and value of b: " + obj.b);

function swap(x) {
  console.log(
    "Before Swap inside function: Value of a: " +
      x.a +
      " and value of b: " +
      x.b
  );
  var temp = x.a;
  x.a = x.b;
  x.b = temp;
  console.log(
    "After Swap inside function: Value of a: " + x.a + " and value of b: " + x.b
  );
}

swap(obj);
console.log("After swap: Value of a: " + obj.a + " and value of b: " + obj.b);
