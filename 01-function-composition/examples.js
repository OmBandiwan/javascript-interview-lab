//Function Composition
// Implement a compose function that accepts two functions f and g, and returns a new function that applies g first and then f.

const double = (x) => x * 2;
const addOne = (x) => x + 1;
const square = x => x * x;



function compose3(f, g, h) {
    
return (x) => f(g(h(x)));
}

const result2 = compose3(square, addOne, double)(3);
console.log(result2);

function compose(f,g){
    return (x)=>f(g(x))
}
const result = compose(addOne, double)(5);

console.log(result);