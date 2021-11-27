{
	let email = document.getElementById("feedback_email")
	let name = document.getElementById("feedback_name")
	let comment = document.getElementById("feedback_comment")
	let form = document.getElementById("feedback_form")

	let form_div = document.getElementsByClassName("feedback title")[0]

	form.addEventListener('submit', e =>{
		e.preventDefault();
		if (comment.value === " " || comment.value === null){
			unsuccessful(name.value)
		}

		else{
			thanks(name.value);
			form.reset();
		}
	})

	function thanks(username){
		let node = document.getElementsByClassName("success")[0]
		node.style.transform = "scale(1.5)";
		node.innerHTML = `Change this message from feedback.js, ${username}`

		setTimeout(()=>{
			node.style.transform = "scale(0)";
		},4500)
	}

	function unsuccessful(username){
		let node = document.getElementsByClassName("success")[0]
		node.style.transform = "scale(1.5)";
		node.innerHTML = ` No feedback?, chg feedback ${username}`

		setTimeout(()=>{
			node.style.transform = "scale(0)";
		},2000)
	}
}


{
	let email = document.getElementById("resume_email");
	let resume_form = document.getElementById("resume_form")
	let status = document.getElementsByClassName("resume_success")[0]
	let status_message = document.getElementsByClassName("notification message")[0]
	let notification_btn = document.getElementById("noti_close")

	resume_form.addEventListener('submit',e =>{
		e.preventDefault();
		status.style.transform="scale(1)";
		status_message.innerHTML= `A copy of my resume will be delivered to ${email.value} shortly. Thank you.`
		notification_btn.addEventListener('click',()=>{
			status.style.transform="scale(0)";
		})
		resume_form.reset();	
	}
	)
}