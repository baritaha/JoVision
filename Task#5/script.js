let content = $("<div></div>", {
    class: "content"
});
let title1 = $('<h3></h3>', {
    class: "title1",
    text: "Task#5"
});
let title = $('<div></div>', {
    class: "title",
    text: "Current Time"
});
let date = $("<p></p>", {
    id: "date"
});
let part1 = $('<span></span>', {
    id: "p1"
});
let part2 = $('<span></span>', {
    id: "p2"
});
content.append(title1);
content.append(title);
content.append(date);
date.append(part1);
date.append(part2);
$("body").append(content);
const dateContent = document.getElementById('date');
const part1Date = document.getElementById('p1');
const part2Date = document.getElementById('p2');
dateContent.style.margin = "50px";
Object.assign(part1Date.style, {
    boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
    padding: "20px",
    color: "white",
    fontWeight: "bold",
    background: "rgb(27, 118, 236)",
    borderRadius: "10px",
    borderTopRightRadius: "0",
    borderBottomRightRadius: "0",
    fontSize: "30px"
});
Object.assign(part2Date.style, {
    color: "rgb(27, 118, 236)",
    background: "white",
    padding: "20px",
    fontWeight: "bold",
    borderRadius: "10px",
    borderTopLeftRadius: "0",
    borderBottomLeftRadius: "0",
    fontSize: "30px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.4)"
});


function getDate() {
    console.clear();
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hours = String(date.getHours()).padStart(2, '0');
    let minutes = String(date.getMinutes()).padStart(2, '0');
    let seconds = String(date.getSeconds()).padStart(2, '0');
    let fullTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    part1Date.innerHTML = `${day}/${month}/${year} `;
    part2Date.innerHTML = `${hours}:${minutes}:${seconds}`;
    console.log(fullTime);
    return fullTime;
}
getDate();

let setTimeUpdate = setInterval(getDate, 1000);