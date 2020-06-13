import React, { Component } from 'react';
import tachyons from 'tachyons';
import './Header.css'
import logo from './logo.png'
const Header = ({showContactComponent}) => {
	return(
	<div className="full flex container2 align center pa0 ma0 ">
			<div className="pa3 pa4-ns">
			<div className="flex flex-wrap justify-center">
			<img src={logo} className="pointer grow" height="250px"/>
			<div className="">
			<h1 class="b f1 x f222 f-headline-ns tc white-70 db mb3 mb4-ns" href="#" title="Home">SHUJA ALI</h1>
			<h2 class="f2 f1-l lh-title mt0 lightest-blue font i">Web Designer and Developer</h2>
			</div>
			</div>
			<div>
				<article className="center tc gold font">
			  		<p className="pa4 f3">A front and back-end Developer. I enjoy turning complex problems into simple, beautiful and intuitive designs. I have developed different projects from scratch carrying the development of its' back-end and front-end codebases. My current skillset includes React, Redux, NodeJS, HTML5, CSS3, JavaScript, NodeJS, ExpressJS. I can help you with all the sides of your project: verifying good UI/UX design, leading/co-developing the back-end and front-end, setting up the CI/CD. Apart from this I am a University Student. 
			  		</p>				    
				</article>
				<a className="mt0 f3 hover-white pointer no-underline grow dib v-mid bg-light-red white ba br-pill b--light-red shadow bw-2 ph4 pv3 mb4"
				      onClick={()=>showContactComponent()}>
				      Contact Now
				    </a>
	   		</div>
	   		</div>
	   		
	</div>

	);
}
export default Header;
