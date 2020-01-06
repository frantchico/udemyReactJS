//Destructuring
const user = {
  firstName: "Sam",
  lastName: "Doe"
};

const numbers = [1, 2];

const { firstName, lastName } = user;
console.log("firstName:", firstName, "lastName:", lastName);

const [one, two] = numbers;
console.log("one:", one, "two:", two);

//Spread operator
const admin ={
  ...user,
isAdmin: true,
}
console.log("Admin",admin);

const moreNumbers=[...numbers, 3];
console.log("moreNumbers",moreNumbers);