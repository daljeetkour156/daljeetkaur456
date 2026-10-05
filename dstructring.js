const a = [1, 10, 20];
const a = [1, 10, 20];
const [a1] = a;
console.log(a1);

const a = [1, 10, 20];
const [a1, ...a2] = a;
console.log(a1, a2);

const c = [1, 10, 20];
const [, a1, a2] = c;
console.log(a1, a2);

const a = { name: "ani", myclass: "5", age: "23" };
const { name, myclass, age } = a;
console.log(name, myclass, age);
