function factorial(num){
    if(num === 1) return 1;
    return num * factorial(num-1)
}

function power(base,pw){
    if(pw ===0) return 1;
    return base * power(base,pw-1)
}

console.log(factorial(5)); // 120
console.log(power(2,3)); // 8


/// note
/// breaking a problem in to smaller sub problems and solving them by calling itself is called recursion
/// recursion algorithm is like stack last in first out is store on memory stack

//disadvantage
// 1. recursion is not efficient
// 2. recursion is not memory efficient
// 3. data is large can cause stack overflow