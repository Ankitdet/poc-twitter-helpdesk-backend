
let arr=[1,2,3,4,5,6,7,8];

let newVal=arr.map(arrObject=>arrObject>3); 
console.log(newVal);
 newVal=arr.filter(arrObject=>arrObject>3);
console.log(newVal);
 newVal=arr.find(arrObject=>arrObject>3); 
console.log(newVal);


const expiryTime = new Date(
    new Date().getTime() + 24 * 60 * 60 * 1000
  ).toUTCString();

  console.log(expiryTime);