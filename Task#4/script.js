const result=document.getElementById("result");
function A(){
    let array=[];
    for(let i=0;i<=100;i++){
        array.push(i);

    }
    checkDivisibleBy3(array);
}
function checkDivisibleBy3(array){
    let divisibleBy3=array.filter(num=>num%3===0);
    let notDivisibleBy3=array.filter(num=>num%3!==0);
    console.log("Divisible by 3:",divisibleBy3);
    console.log("Not Divisible by 3:",notDivisibleBy3);
    result.innerHTML=`<h2>Divisible by 3  (Removed):</h2><p>${divisibleBy3.join(", ")}</p>
    <h2>Not Divisible by 3:</h2><p>${notDivisibleBy3.join(", ")}</p>`;
}

function B(){
  //create an array of 100 numbers then add numbers from 100 to 150 for the array
  let array=[];
  for(let i=0;i<=100;i++){
      array.push(i);
  }
    for(let i=101;i<=150;i++){
        array.push(i);
    }
    console.log(array);
    result.innerHTML=`<h2>add to array from 100 to 150 :</h2><p>${array.join(", ")}</p>`;

}
function C(){
//create array from 0 to 100 then add 3 for each number in the array
let array=[];
for(let i=0;i<=100;i++){
    array.push(i);
}
for(let i=0;i<array.length;i++){
    array[i]=array[i]+3;
}
console.log(array);
result.innerHTML=`<h2>add 3 for each number in the array:</h2><p>${array.join(", ")}</p>`;
}
function D(){
let array=[];
let cutArr=[];
for(let i=0;i<=100;i++){
    array.push(i);
    if(i>=20 && i<=40){
        cutArr.push(array[i])//store from 20 to 40
    }
}
//let slicedArray=array.slice(20,40); print from 20 to 39

console.log(cutArr);
result.innerHTML=`<h2> array from 20 to 40:</h2><p>${cutArr.join(", ")}</p>`;

}