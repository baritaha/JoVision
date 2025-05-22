
function arrayNumber() {
    const result = document.getElementById("result");
    let arr = [];
    for (let i = 0; i <= 100; i++) {
        arr.push(i);
    }
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    result.innerHTML = "Sum of array from 0 to 100 is: " + sum;
    result.style.boxShadow = "0 0 10px #000";
    result.style.padding = "10px";
    result.style.margin = "20px";
    result.style.backgroundColor = "#f0f0f0";
    result.style.borderRadius = "5px";
    result.style.fontSize = "20px";
    console.log("Sum of array from 0 to 100 is: " + sum);
}