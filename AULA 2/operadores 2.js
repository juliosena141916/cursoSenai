let ab = true;
let bc = false

//Operador E (&&)
let Eresultado = ab && bc;
console.log("Resultado de ab && bc: " + Eresultado); // false

//Operador OU (||)
let OUresultado = ab || bc;
console.log("Resultado de ab || bc: " + OUresultado); // true

//Operador NOT (!)
let NAOresultado = !ab;
console.log("Resultado de !ab: " + NAOresultado); // false

//Combinaçõa de operadores lógicos
let combinados = (ab && !bc) || (!ab && bc);
console.log("Resultado de (ab && !bc) || (!ab && bc): " + combinados); // true

//Operadores com valores numéricos
let x = 10;
let y = 5;
let z = 0;

//Operador E (&&) com valores numéricos
let ResultadoE = (x > y) && (y > z);
console.log("Resultado de (x > y) && (y > z): " + ResultadoE); // true
let ResultadoE2 = (z < y) && (z < x);
console.log("Resultado de (z < y) && (z < x): " + ResultadoE2); // true
let ResultadoE3 = (z < y) && (x > z);
console.log("Resultado de (z < y) && (x > z): " + ResultadoE3); // true

//Operador OU (||) com valores numéricos
let ResultadoOU = (x < y) || (y > z);
console.log("Resultado de (x < y) || (y > z): " + ResultadoOU); // true
let ResultadoOU2 = (z > x) || (z < y);
console.log("Resultado de (z > x) || (z < y): " + ResultadoOU2); // true

//Operador NOT (!) com valores numéricos
let ResultadoN = !(x < y);
console.log("Resultado de !(x < y): " + ResultadoN); // true

//Combinação de operadores lógicos com valores numéricos
let ResultadoC = ((x > y) && (y > z)) || ((x < y) && (z > y));  
console.log("Resultado de ((x > y) && (y > z)) || ((x < y) && (z > y)): " + ResultadoC); // true