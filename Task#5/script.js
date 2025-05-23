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
let date=$("<p></p>",{
    id:"date"
});
let part1=$('<span></span>',{id:"p1"});
let part2=$('<span></span>',{id:"p2"});
content.append(title1);
content.append(title);
content.append(date);
date.append(part1);
date.append(part2);
$("body").append(content);
const dateContent=document.getElementById('date');
const part1Date=document.getElementById('p1');
const part2Date=document.getElementById('p2');
dateContent.style.margin="50px";
part1Date.style.boxShadow="0 4px 10px rgba(0,0,0,0.4)";
part1Date.style.padding="20px";
part1Date.style.color="white";
part1Date.style.fontWeight="bold";
part1Date.style.background="rgb(27, 118, 236)";
part1Date.style.borderRadius="10px";
part1Date.style.borderTopRightRadius = "0";
part1Date.style.borderBottomRightRadius = "0";
part1Date.style.fontSize="30px"
part2Date.style.color="rgb(27, 118, 236)";
part2Date.style.background="white";
part2Date.style.padding="20px";
part2Date.style.fontWeight="bold";
part2Date.style.borderRadius="10px";
part2Date.style.borderTopLeftRadius = "0";
part2Date.style.borderBottomLeftRadius = "0";
part2Date.style.fontSize="30px";
part2Date.style.boxShadow="0 4px 10px rgba(0,0,0,0.4)";

function getDate() {
    console.clear();
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hours = String(date.getHours()).padStart(2, '0');
    let minutes = String(date.getMinutes()).padStart(2,'0');
    let seconds =String(date.getSeconds()).padStart(2,'0');
    let fullTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    part1Date.innerHTML=`${day}/${month}/${year} `;
    part2Date.innerHTML=`${hours}:${minutes}:${seconds}`;
    console.log(fullTime);
    return fullTime;
}
getDate();

let setTimeUpdate = setInterval(getDate, 1000);