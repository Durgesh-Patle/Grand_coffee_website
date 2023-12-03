let openinput = document.getElementById("inpt1");
let Search = document.getElementById("img2");


Search.addEventListener("click", () => {
    // alert("Hello;")
    openinput.style.display='block';
});

let openNav=document.getElementById("opennav");
let threeTicks =document.getElementById("threeTick");

threeTicks.addEventListener("click",()=>{
    openNav.style.display='block';
})

function closeNav(){
    openNav.style.display='none';
}