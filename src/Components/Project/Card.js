 import React from 'react'
import './Card.css';
const Card = ({name,path,info,link}) =>{

	return(
		<div className='tc dib card br3 bg-near-black hide-child pa3 ma2 bw2 shadow-5'>
			<img alt={info} alt="Personal Project" src={path} width="500px"/>
			<div>
				<h2 className="white">{name}</h2>
				<p className="white f4">{info}</p>
				<a href={link} target="_blank" className='mt0 d br-pill f4 hover-bg-orange black pointer no-underline dib v-mid bg-blue white ph4 pv2 '>
				<img className="" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNNi4xODggOC43MTljLjQzOS0uNDM5LjkyNi0uODAxIDEuNDQ0LTEuMDg3IDIuODg3LTEuNTkxIDYuNTg5LS43NDUgOC40NDUgMi4wNjlsLTIuMjQ2IDIuMjQ1Yy0uNjQ0LTEuNDY5LTIuMjQzLTIuMzA1LTMuODM0LTEuOTQ5LS41OTkuMTM0LTEuMTY4LjQzMy0xLjYzMy44OThsLTQuMzA0IDQuMzA2Yy0xLjMwNyAxLjMwNy0xLjMwNyAzLjQzMyAwIDQuNzQgMS4zMDcgMS4zMDcgMy40MzMgMS4zMDcgNC43NCAwbDEuMzI3LTEuMzI3YzEuMjA3LjQ3OSAyLjUwMS42NyAzLjc3OS41NzVsLTIuOTI5IDIuOTI5Yy0yLjUxMSAyLjUxMS02LjU4MiAyLjUxMS05LjA5MyAwcy0yLjUxMS02LjU4MiAwLTkuMDkzbDQuMzA0LTQuMzA2em02LjgzNi02LjgzNmwtMi45MjkgMi45MjljMS4yNzctLjA5NiAyLjU3Mi4wOTYgMy43NzkuNTc0bDEuMzI2LTEuMzI2YzEuMzA3LTEuMzA3IDMuNDMzLTEuMzA3IDQuNzQgMCAxLjMwNyAxLjMwNyAxLjMwNyAzLjQzMyAwIDQuNzRsLTQuMzA1IDQuMzA1Yy0xLjMxMSAxLjMxMS0zLjQ0IDEuMy00Ljc0IDAtLjMwMy0uMzAzLS41NjQtLjY4LS43MjctMS4wNTFsLTIuMjQ2IDIuMjQ1Yy4yMzYuMzU4LjQ4MS42NjcuNzk2Ljk4Mi44MTIuODEyIDEuODQ2IDEuNDE3IDMuMDM2IDEuNzA0IDEuNTQyLjM3MSAzLjE5NC4xNjYgNC42MTMtLjYxNy41MTgtLjI4NiAxLjAwNS0uNjQ4IDEuNDQ0LTEuMDg3bDQuMzA0LTQuMzA1YzIuNTEyLTIuNTExIDIuNTEyLTYuNTgyLjAwMS05LjA5My0yLjUxMS0yLjUxLTYuNTgxLTIuNTEtOS4wOTIgMHoiLz48L3N2Zz4="/>
				See Live</a>
			</div>
		</div>
		);
}
export default Card;