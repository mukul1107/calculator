function add(a,b){
    return a+b;
}
function sub(a,b){
    return b-a;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}



function operate(oprtr, a , b){
    switch(oprtr){
        case "+":
            console.log(add(a,b));
            break;
        case "-":
            console.log(sub(a,b));
            break;
        case "*":
            console.log(mul(a,b));
            break;
        case "/":
            console.log(div(a,b));
            break;
        default:
            console.log("Invalid!")
    }
}

operate();