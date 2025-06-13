const users = [
  { name: "John Doe", age: 28, role: "developer" },
  { name: "Jane Smith", age: 32, role: "admin" },
  { name: "Bob Johnson", age: 24, role: "developer" },
  { name: "Sarah Williams", age: 27, role: "manager" },
  { name: "Mike Brown", age: 35, role: "admin" },
];

//Filter users above age 30
let userAbove30 = users.filter(user => user.age > 30);
console.log(`users above 30 : ${JSON.stringify(userAbove30)} `);

//Transform the data to only include names
let userName=users.map(user=>user.name);
console.log(`users names : ${userName}`);

//Find the first user with role "admin" using array methods
let firstAdmin = users.find(user => user.role === "admin");
console.log(`fisrt admin : ${JSON.stringify(firstAdmin)}`);

//Find the last user with role "admin" using array methods
let reversedArray=users.reverse();
console.log(reversedArray);
let lastAdmin=reversedArray.find(user=>user.role==="admin");
console.log(`last admin : ${JSON.stringify(lastAdmin)}`);

//Make deepCopy Function with example for nested objects
const user={ 
    name: "John Doe", 
    age: 28, 
    address: {
        city:"cairo",
        country:"egypt",
    },
    role: "developer" };
    console.log(`user: ${JSON.stringify(user)}`)
    function deepCopy(o){
        return JSON.parse(JSON.stringify(o));
    }
    let userCopy=deepCopy(user);
    console.log(`user copy: ${JSON.stringify(userCopy)}`);

    userCopy.address="giza";
    console.log(`user after update address: ${JSON.stringify(user)}`);
    console.log(`user copy after update address: ${JSON.stringify(userCopy)}`);
