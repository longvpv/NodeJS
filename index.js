// Given Array.prototype.map syntax:
const arr = ['Harry Potter', 'Hermione', 'Ron Weasly'];

var newArray = arr.map((currentValue) => {
	// Return element for newArray
	return {
		name: currentValue,
	};
});
console.log(newArray);
//convert an Array of name string into person objects {name: 'foo'} using arrow function
// expect: newArray = [{name: 'Harry Potter'}, {name: 'Hermione'}, {name: 'Ron Weasly'}]

const students = [
	{
		name: 'Nam',
		age: 24,
		gender: 'male',
	},
	{
		name: 'Mai',
		age: 22,
		gender: 'female',
	},
	{
		name: 'Trang',
		age: 23,
		gender: 'female',
	},
	{
		name: 'An',
		age: 20,
		gender: 'male',
	},
	{
		name: 'Thien',
		age: 27,
		gender: 'male',
	},
];

// Count male and female

const CountMale = students.filter((student) => student.gender === 'male');
console.log(CountMale.length);
const CountFemale = students.filter((student) => student.gender === 'female');
console.log(CountFemale.length);
const newArrayStudent = students.map(student => student.name)
console.log(newArrayStudent);