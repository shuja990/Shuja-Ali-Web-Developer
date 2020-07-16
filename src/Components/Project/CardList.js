import React from 'react';
import Card from './Card';
const CardList = ({projects}) =>{
	return(
		<div>
		<h1 className="mt2 mb0 baskerville bg-black white pa2 fw1 f1 hover-bg-near-black">PORTFOLIO</h1>
		<div className="flex flex-wrap justify-center">
				{projects.map((item,idx)=>(
					<Card 
					key={idx}
					name={item.name} 
					path ={item.path} 
					info={item.info}
					link={item.link}/>
					
				))
				}
					

		</div> 
		</div>
		);
}
export default CardList
