let a = [1,2,3,4,5];
let b = ['r','a','j','u']
let c = ["Aditya","Gowtham","Sekhar"];
let d = "Raju";


c.splice(c.indexOf("Sekhar"),1);

c.push("Pranav");
c.pop();
c.shift();

c.splice(0,0,"pavan");

console.log(c);

console.log(c.length, c.indexOf("Aditya"));

for(let i =0;i<c.length;i++)      //array iteration
{
    console.log(c[i]);
}