import React, { Component } from 'react';
import CardList from './CardList';
import {projects} from './Projects'
const Project = () => {
	return(
		<div className="">
			<CardList projects={projects}/>
		</div>
	);
}
export default Project;