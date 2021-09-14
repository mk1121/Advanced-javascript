//function constractor & new keyword
//ref: https://js.zonayed.me/advance/post-3

const Friend = function (name, age, roll) {
  this.name = name;
  this.age = age;
  this.roll = roll;
  this.fullDetails = function () {
    console.log(
      `Hi, my name is ${this.name}. I am ${this.age} years old. My class roll is ${this.roll}.`
    );
  };
};
const maruf = new Friend("Abdullah Al Maruf", 23, 697);
const arif = new Friend("Md Ariful Islam", 22, 704);
maruf.fullDetails();
arif.fullDetails();
