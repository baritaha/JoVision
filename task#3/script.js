
function arrayNumber() {
    const result = document.getElementById("result");
    let arr = [];
    for (let i = 0; i <= 100; i++) {
        arr.push(i);
    }
    let evenNumbers=[];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }
    let sum=0;
    for (let i = 0; i < evenNumbers.length; i++) {
        sum += evenNumbers[i];
    }
    result.innerHTML = "Sum of Even Array Number  from 0 to 100 is: " + sum;
    result.style.boxShadow = "0 0 10px #000";
    result.style.padding = "10px";
    result.style.margin = "20px";
    result.style.backgroundColor = "#f0f0f0";
    result.style.borderRadius = "5px";
    result.style.fontSize = "20px";
    console.log("Sum of array from 0 to 100 is: " + sum);
}