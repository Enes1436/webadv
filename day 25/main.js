var progammingLanguages = ['javascriptt','php','java'];

console.log(progammingLanguages[2]);

progammingLanguages.push('Python');

progammingLanguages.pop();

progammingLanguages.unshift('c#');

progammingLanguages.shift();

console.log(progammingLanguages);

var progammingLanguages1 = ['javascriptt','php','java','python','c#'];

progammingLanguages1.splice(1,1, 'Ruby');

console.log(progammingLanguages1)

console.log(Math.floor (Math.random()*10));

var students =['student1', 'student2','student3'];

var [s1,  s2, s3,] = students;

console.log(s1);
console.log(s3);

var students =['London', 'Berlin','Paris'];

var [s1,  , s3,] = students;

console.log(s1);
console.log(s3);

var numbers =[1,2,3,4,5,6,7,8,9,10];

var[first, second, ... otherNumbers]=numbers;

console.log(first);
console.log(second);
console.log(otherNumbers.toString());