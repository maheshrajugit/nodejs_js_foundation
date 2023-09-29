function calculate_simple_interest(p,t,r)
{
    let I = (p * t * r )/ 100;
    // console.log("simple interest = ",I);
    return I;

}

let P = 1000;
let T = 2;
let R = 1.5;


let a = [1,2,3,4,5];a.splice(1,2);

console.log(a,b);


let simple_interest = calculate_simple_interest(P,T,R);
console.log("simple interest for "+P+" amount in "+T+"months to be paid is ",simple_interest);