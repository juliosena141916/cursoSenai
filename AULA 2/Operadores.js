//Operador lógico E
let a = true;
let b = false;
let c = true;
let d = false;

console.log("Resultado de a E b: " + (a && b)); // false
console.log(a && true); // true
console.log(a && c); // true
console.log(a && d); // false
console.log(b && c); // false
console.log(b && d); // false
console.log(c && d); // false

//Operador lógico OU
let e = true;
let f = false;
let g = true;
let h = false;

console.log("Resultado de e OU f: " + (e || f)); // true
console.log(e || g); // true
console.log(e || h); // true
console.log(f || g); // true
console.log(f || h); // false
console.log(g || h); // true

//Operador lógico NOT
let i = true;
let j = false;
let k = true;
let l = true;

console.log("Resultado de NOT i: " + (!i)); // false
console.log(!j); // true
console.log(!k); // false
console.log(!l); // false
console.log(!k && !l); // false
console.log(!i || !j); // true

