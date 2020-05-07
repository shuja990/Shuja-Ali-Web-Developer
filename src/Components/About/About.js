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
				<!-- Put this code anywhere in the body of your page where you want the badge to show up. -->

<div itemscope itemtype='http://schema.org/Person' class='fiverr-seller-widget' style='display: inline-block;'>
     <a itemprop='url' href=https://www.fiverr.com/shuja990 rel="nofollow" target="_blank" style='display: inline-block;'>
        <div class='fiverr-seller-content' id='fiverr-seller-widget-content-1af10988-07f9-4675-8f1f-db4de35a4e0b' itemprop='contentURL' style='display: none;'></div>
        <div id='fiverr-widget-seller-data' style='display: none;'>
            <div itemprop='name' >shuja990</div>
            <div itemscope itemtype='http://schema.org/Organization'><span itemprop='name'>Fiverr</span></div>
            <div itemprop='jobtitle'>Seller</div>
            <div itemprop='description'>A front and back-end Developer. I enjoy turning complex problems into simple, beautiful and intuitive designs. I have developed different projects from scratch carrying the development of its' back-end and front-end codebases. My current skillset includes React, Redux, NodeJS, HTML5, CSS3, JavaScript, NodeJS, ExpressJS. I can help you with all the sides of your project: verifying good UI/UX design, leading/co-developing the back-end and front-end, setting up the CI/CD. Apart from this I am a University Student.</div>
        </div>
    </a>
</div>

<script id='fiverr-seller-widget-script-1af10988-07f9-4675-8f1f-db4de35a4e0b' src='https://widgets.fiverr.com/api/v1/seller/shuja990?widget_id=1af10988-07f9-4675-8f1f-db4de35a4e0b' data-config='{"category_name":"\n                                    Programming \u0026 Tech\n\n                            "}' async='true' defer='true'></script>

				</div>
				<Tick Images={Images} />
			</div>
		);
}
export default About;
