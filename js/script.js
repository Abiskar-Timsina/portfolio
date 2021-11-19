

/* Nav Bar Animation*/
let nav= document.getElementsByClassName("nav")[0]
let drop = document.getElementsByClassName("dropdown image")[0]

let animation_for_nav = "transform 250ms ease-in";
let translate_upwards = "translateY(-100px)";
let translate_downwards = "translateY(-10px)"

nav.style.transition= animation_for_nav;
nav.style.transform= translate_downwards;

setTimeout(() =>{
nav.style.transition= animation_for_nav;
nav.style.transform= translate_upwards;
},1500)

nav.addEventListener("mouseover",e => {
	nav.style.transition= animation_for_nav;
	nav.style.transform= translate_downwards;
	drop.style.transform="rotate(180deg)"
	e.stopPropagation();
},{capture:true})

nav.addEventListener("mouseout",e => {
	nav.style.transition= animation_for_nav;
	nav.style.transform= translate_upwards; 
	drop.style.transform="rotate(0deg)"
	e.stopPropagation();
},{capture:true})
/* Nav Bar animation end*/

const pic = document.getElementsByClassName("landing")[0]

let t = new TimelineMax();

t.fromTo(pic,1,{height:"0%"},{height:"120%"})
t.fromTo(pic,1,{height:"120%"},{height:"80%"})

setTimeout(()=> {console.log(str)})

/*Type writer animation*/
let name = "Hi, I'm Abiskar Timsina"
name = name.split(" ")
let str = new String();

name.forEach(word =>{
	str += word + " ";
	setTimeout(()=> {	
		document.getElementsByClassName("name")[0].innerHTML = str;
		console.log(str)
	},250)
});