import React from 'react';
import data from './data.json';
import img from './profile.jpg';
import { Link } from 'react-router-dom';


let Cards=()=>{
	let cardsData=data.details;
	console.log(cardsData);

	
	let images = [img];
	
	



	return(
		<div className="App">
		<h1 className="text-primary">My Profile</h1>
		

			{cardsData.map((values,index)=>(

			<div className="col">

		
			<div className="col" key={index}>
			<div className="card">
			<img src={img}/>

			<h5>{values.card.name}</h5>
			<p>{values.card.mobile}</p>
			<a href={"mailto:"+values.card.email}>
			<p>{values.card.email}</p>

			</a>
			<Link to={{pathname:"/resume",personcard:{id:index}}} className="btn btn-primary">Resume</Link>


		   
			
	




	        </div>
			</div>
			</div>
	
			
		
		
		
))}

</div>



		);
};
export default Cards;