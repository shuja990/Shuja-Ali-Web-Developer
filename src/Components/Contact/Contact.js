import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import StatusAlert, { StatusAlertService } from 'react-status-alert';
import 'react-status-alert/dist/status-alert.css';
const Contact = () => {


function sendEmail(e) {
    	e.preventDefault();
    	emailjs.sendForm('default_service', 'template_ixtvNRzX', e.target, 'user_DLaK4TDVt4KzTGl1oxNQk')
    	.then((result) => {
    		if(result.text==="OK"){
    			const alertId = StatusAlertService.showSuccess('Email Sent');
     		}
      	}, (error) => {
        console.log(error.text);
      	});
  	}

  return (
	    <div className="pa3 flex justify-center">
	    <form className="contact-form back pa4 pt0 white-80 tc ba b--dark-gray bw2" onSubmit={sendEmail}>
			<div>
			<h1 className="f1 b b mb2 pa4">Contact Us</h1>
      		<p className="f3 b pb0 pa1">Please fill in your infromation and we will get back to you as soon as possible</p>
			<div className="flex justify-center">
				<img  className="pr2" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAzdjE4aDI0di0xOGgtMjR6bTYuNjIzIDcuOTI5bC00LjYyMyA1LjcxMnYtOS40NThsNC42MjMgMy43NDZ6bS00LjE0MS01LjkyOWgxOS4wMzVsLTkuNTE3IDcuNzEzLTkuNTE4LTcuNzEzem01LjY5NCA3LjE4OGwzLjgyNCAzLjA5OSAzLjgzLTMuMTA0IDUuNjEyIDYuODE3aC0xOC43NzlsNS41MTMtNi44MTJ6bTkuMjA4LTEuMjY0bDQuNjE2LTMuNzQxdjkuMzQ4bC00LjYxNi01LjYwN3oiLz48L3N2Zz4="/>
				<p className=" f6">shujaali1234@gmail.com</p>
			</div>
			</div>
			<label className="f4 b db mb2 pa2">Name</label>
			<input name="user_name" 
			className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-60" 
			required
			type="text" aria-describedby="name-desc"/>
			<label className="f4 b db pa2 mb2">Email</label>
			<input id="user_email" name="user_email" 
			className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-60" 
			required 
			type="email" 
			aria-describedby="name-desc"/>
			<label className="f4 b db  pa2 mb2">Message</label>
	    	<input required type="text" id="comment" name="message" className="b pa2 pb4 input-reset ba bg-transparent hover-bg-black hover-white w-60" 
	    	aria-describedby="comment-desc"/>
			<br/><br/>
			<StatusAlert/> 
			<button  className="b a ph3 pv2 input-reset ba bg-blue grow pointer w-60 f4 hover-bg-black ">Submit</button>
		</form>
	</div>
  );
}
			

export default Contact;