const name=document.querySelector(".name");

function ExecuteFn(color,backGround,text)
{
    name.style.color=color;
    name.style.backgroundColor=backGround;

    console.log(`${text} from ${color}`)
}
