var myObject = {
  name: 'Bob',
  job: 'Coder',
  sayName: function () {
    console.log(`My name is ${this.name}`);
  },
  sayJob: function () {
    console.log(`My job is ${this.job}`);
  }
}


console.log(myObject.name);
console.log(myObject.job);

myObject.sayName();
myObject.sayJob();

var desiredProperty = 'name';
console.log(myObject[desiredProperty]);
