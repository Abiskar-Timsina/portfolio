{
	let email = document.getElementById("feedback_email")
	let name = document.getElementById("feedback_name")
	let comment = document.getElementById("feedback_comment")
	let form = document.getElementById("feedback_form")

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

	let status = document.getElementsByClassName("feedback_success")[0]
	let status_message = document.getElementsByClassName("feedback notification message")[0]
	let notification_btn = document.getElementById("feedback_btn_close")
	let status_icon = document.getElementById("status_icon")
	let title = document.getElementsByClassName("feedback notification title")[0]
	
	function thanks(username){
		status.style.backgroundColor = "green";
		title.childNodes[0].nodeValue = "Successful"
		status_icon.src = "./img/icons/check.png";
		status.style.transform="scale(1)";
		status_message.innerHTML= `Thank you very much ${username}. Your feedback is highly appreciated.`
		notification_btn.addEventListener('click',()=>{
			status.style.transform="scale(0)";
		})
	}

	function unsuccessful(username){
		status.style.backgroundColor = "red";
		title.childNodes[0].nodeValue = "Failed to Submit"
		status_icon.src = "./img/icons/cross.png";
		status.style.transform="scale(1)";
		status_message.innerHTML= `Feedback field cannot be empty.`;
		notification_btn.addEventListener('click',()=>{
			status.style.transform="scale(0)";
		})
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