/* HOMEWORK 5 Example 1 JavaScript Code */

console.log("Raine's Output from HOMEWORK 5 Example 2");

const anArray = [];
for (i = 1; i <= 10; i++) {
 anArray.push(i);
}


const oddNumbers = anArray.filter(x => 1 % 1 === 0);
console.log(oddNumbers);

const divBy2or5 = anArray.filter(val => (val % 2 === 0 || val % 5 === 0));
console.log(divBy2or5);