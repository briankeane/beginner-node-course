# Objects


An object is just a way of grouping data that belongs together.  For example you can store a firstName and a lastName on an object like this:

```
var aPerson = {
  firstName: 'Bob',
  lastName: 'Dylan'
}

```


And then access them like this:
```
console.log(aPerson.firstName);   // prints 'Bob'
console.log(aPerson.lastName);    // prints 'Dylan'
```

You can also access them using "bracket" notation like this:
```
console.log(aPerson['firstName']);
console.log(aPerson['lastName']);
```

This is useful because then you can use a variable to access the correct property on an object:
```
var nameToShow = 'firstName';
console.log(aPerson[nameToShow]);  // prints 'Bob'

nameToShow = 'lastName';
console.log(aPerson[nameToShow]);  // prints 'Dylan'
```


You can also store a function in a property on an object.  For example:
```
var aPerson = {
  firstName: 'Bob',
  lastName: 'Dylan',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  }
}

console.log(aPerson.getFullName());  // prints 'Bob Dylan'
```


### Assignment
Create an object that stores:
  1. name
  2. job
  3. a function that prints "My name is (name)"
  4. a function that prints "My job is (job)"

After the object is created:
Console.log name and job
call the name printing function
call the job printing function

Store a property name in a variable and use bracket notation to print the property.

Do that 5x while "cheating" and then 5x without looking.
