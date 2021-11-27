{
	let email = document.getElementById("feedback_email")
	let name = document.getElementById("feedback_name")
	let comment = document.getElementById("feedback_comment")
	let form = document.getElementById("feedback_form")

	let form_div = document.getElementsByClassName("feedback title")[0]

	form.addEventListener('submit', e =>{

		if (comment.value === " " || comment.value === null){
			unsuccessful(name.value)
			e.preventDefault();
		}
		else{
		thanks(name.value);
		form.reset()
		e.preventDefault();
		}
	})

	function thanks(username){
		let node = document.getElementsByClassName("success")[0]
		node.style.transform = "scale(1.5)";
		node.innerHTML = `Change this message from feedback.js, ${username}`

		setTimeout(()=>{
			node.style.transform = "scale(0)";
		},2000)
	}

	function unsuccessful(username){
		console.log("unsuccessful")
		let node = document.getElementsByClassName("success")[0]
		node.style.transform = "scale(1.5)";
		node.innerHTML = ` No feedback?, chg feedback ${username}`

		setTimeout(()=>{
			node.style.transform = "scale(0)";
		},2000)
	}
}
