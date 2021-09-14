//inheritance
//ref: https://js.zonayed.me/advance/post-4

const Student = function (name, age, id) {
  this.name = name;
  this.age = age;
  this.id = id;
  this.fullDetails = function () {
    console.log(
      `My name is ${this.name}.I'm ${this.age} old.My id is ${this.id}.`
    );
  };
};
const Teacher = function (name, age, id, subject) {
  Student.call(this, name, age, id);
  this.job = "Teacher";
  this.subject = subject;
  this.fullDetails = function () {
    console.log(
      `My name is ${this.name}.I'm ${this.age} years old. I'm a ${this.job}.My subject is ${this.subject}.And my id is ${this.id}.`
    );
  };
};
const maruf = new Student("Maruf", 23, 697);
const indro = new Student("indro", 22, 688);
const kamrul = new Teacher("kamrul Islam", 41, 01, "Mathmatics");
const shakawat = new Teacher("Shakawat Hossain", 36, 02, "Accounting");
const jhankarMahbub = new Teacher("Jhankar Mahbub", 36, 03, "Web Development");
jhankarMahbub.fullDetails();
kamrul.fullDetails();
shakawat.fullDetails();
maruf.fullDetails();
indro.fullDetails();
