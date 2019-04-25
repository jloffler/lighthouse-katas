/*
Create a function named organizeInstructors that will receive an array of
instructor objects, and will return a new object that has the following format:
{CourseName: [instructors]}

NOTES
return an object with property course: [array of name]

How to deal with whether the object has the course in it already or not?
object.hasOwnProperty('key') = boolean
*/

const organizeInstructors = function(instructors) {
  let newObj ={};

  for (let obj of instructors) {
    if (!newObj.hasOwnProperty(obj.course)) { // if newObj doesn't have the course yet
      newObj[obj.course] = [obj.name]; // give the property with value name as part of an array.
    } else { // newObj already has that course
      newObj[obj.course].push(obj.name);
    }
  }

  return newObj;
}


console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));

/* Output
{
  iOS: ["Samuel"],
  Web: ["Victoria", "Karim", "Donald"]
}
{
  Blockchain: ["Brendan"],
  Web: ["David", "Carlos"],
  iOS: ["Martha"]
}
*/