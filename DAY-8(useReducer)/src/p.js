const price=[5,2,50,60,70];
const total = price.reduce();

console.log(total);

function sum(acc,element){
    return acc+element;
}
