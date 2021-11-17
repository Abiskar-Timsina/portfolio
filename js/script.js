let nav= document.getElementsByClassName("nav")[0]


nav.style.transition="transform 250ms ease-in";
nav.style.transform="translateY(-10px)";

setTimeout(() =>{
nav.style.transition="transform 250ms ease-in";
nav.style.transform="translateY(-100px)";
},1500)

nav.addEventListener("mouseover",e => {
	nav.style.transition="transform 250ms ease-in";
	nav.style.transform="translateY(-10px)";
	e.stopPropagation();
},{capture:true})

nav.addEventListener("mouseout",e => {
	nav.style.transition="transform 250ms ease-in";
	nav.style.transform="translateY(-100px)"; 
	e.stopPropagation();
},{capture:true})


const pic = document.getElementsByClassName("landing")[0]

let t = new TimelineMax();

t.fromTo(pic,1,{height:"0%"},{height:"120%"})
t.fromTo(pic,1,{height:"120%"},{height:"80%"})

setTimeout(()=> {console.log(str)})

/*Type writer animation*/
let name = "I'm Abiskar Timsina"
name = name.split(" ")
let str = new String();

name.forEach(word =>{
	str += word + " ";
	setTimeout(()=> {	
		document.getElementsByClassName("name")[0].innerHTML = str;
		console.log(str)
	},2500)
});