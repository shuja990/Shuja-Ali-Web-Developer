import React, { Component } from 'react';
import './About.css'
import Card1 from './Card1.js';
import one from './one.png';
import two from './two.png';
import Tick from './Tick.js'
import {Images} from './Images'
const About = () => { 
	return(
			<div className= "">
				<h1 className="mt2 mb0 baskerville bg-black white pa2 fw1 f1 hover-bg-near-black">Our Services</h1>
				<div className="flex flex-wrap justify-center">
				<Card1 
				key={0}
				name="Web Design" 
				info="We work with applications written in React. We work with JavaScript development: bootstraping, refactoring, improving the structure, reliability, build setup. Our layouts will work on any device, big or small. Strong preference for easy to use, intuitive UX/UI."
				path={one}
				/>
				<Card1 
				key={0}
				name="Web Development" 
				info="On the backend we work with Node JS. We can work with with APIs, remote data synchronizations, cloud servers, asynchronous workers. We different types of databases (like PostgreSQL, MySQL, Redis). We write unit and system tests using JEST. We offer Fast load times and lag free interaction. Your Websites don't have to be static, I love making pages come to life. "
				path={two}
				/>
				</div>
				<Tick Images={Images} />
			</div>
		);
}
export default About;