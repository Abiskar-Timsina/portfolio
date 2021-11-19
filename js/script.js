/* Nav Bar Animation*/
{
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
}
/* Nav Bar animation end*/


/* Landing page loading animation */
{
	// Picture animation
	const pic = document.getElementsByClassName("landing")[0]

	let t = new TimelineMax();

	t.fromTo(pic,1,{height:"0%"},{height:"120%"})
	t.fromTo(pic,1,{height:"120%"},{height:"80%"})

	let k0 = KUTE.fromTo(
	'#one',
	{ path:'#four'},
	{ path:"#one"},
	{ repeat:999,duration:2000,yoyo:true},
	)

	let k1 = KUTE.fromTo(
	'#two',
	{ path:'#five'},
	{ path:"#two"},
	{ repeat:999,duration:4000,yoyo:true},
	)

	k0.start()
	k1.start()
}
/* Landing page loading animation */

/* Socials animation and linking */
{
	let fb = document.getElementsByClassName("fb")[0];
	let ln = document.getElementsByClassName("linkedin")[0];
	let gh = document.getElementsByClassName("github")[0];

	fb.addEventListener("click",e=>
	{
		window.open("https://www.facebook.com/abiskar.timsina/")
	});

	ln.addEventListener("click",e=>{
		window.open("https://np.linkedin.com/in/abiskar-timsina-ba646a21b")
	});

	gh.addEventListener("click",e=>{
		window.open("https://github.com/Abiskar-timsina")
	});
}

/* Socials animations and linking end*/