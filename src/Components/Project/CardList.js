import React from 'react';
import Card from './Card';
import one from './one.png'
import two from './two.png'
import three from './three.png'
const CardList = ({projects}) =>{
	return(
		<div>
		<h1 className="mt2 mb0 baskerville bg-black white pa2 fw1 f1 hover-bg-near-black">PORTFOLIO</h1>
		<div className="flex flex-wrap justify-center">
					<Card 
					key={projects[0].key}
					name={projects[0].name} 
					path ={one} 
					info={projects[0].info}
					link={projects[0].link}/>
					<Card 
					key={projects[1].key}
					name={projects[1].name} 
					path ={two} 
					info={projects[1].info}
					link={projects[1].link}/>
						<Card 
					key={projects[2].key}
					name={projects[2].name} 
					path ={three} 
					info={projects[2].info}
					link={projects[2].link}/>
					<Card 
					key={projects[3].key}
					name={projects[3].name} 
					path ={projects[3].path} 
					info={projects[3].info}
					link={projects[3].link}/>
					<Card 
					key={projects[4].key}
					name={projects[4].name} 
					path ={projects[4].path} 
					info={projects[4].info}
					link={projects[4].link}/>

		</div> 
		</div>
		);
}
export default CardList
