import React from 'react'
import './Card1.css';

const Card1 = ({name,info,path}) =>{

	return(
	<div className='tc dib card ca br3 pa3 ma2 bw2 shadow-5'>
			<img alt={name} alt={name} src={path} width="500px"/>
			<div className="">
				<h2 className="white">{name}</h2>
				<p className="white f4">{info}</p>
			</div>
		</div>
		);
}
export default Card1