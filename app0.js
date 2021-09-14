// this, call(),apply(),bind();
// ref: https://js.zonayed.me/advance/post-1

var myObj = {
  name: "Zonayed Ahmed",
  age: 21,
  timer: function () {
    setTimeout(
      function () {
        console.log("My name is " + this.name);
      }.bind(myObj),
      1000
    );
  },
};
myObj.timer();

/*var myObj = {
  name: "Zonayed Ahmed",
  age: 21,
  timer: function () {
    setTimeout(
      function () {
        console.log("My name is " + this.name);
      }.call(myObj),
      1000
    );
  },
};
myObj.timer();
*/
