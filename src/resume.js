import React from 'react';
import data from './data.json';
import './resume.css';
import img from './profile.jpg';




function Resume(props){
	let profile =data.details[props.location.personcard.id];
	console.log(profile);

	let images = [img];

return(
	<div className="div">

	
		
        <div className="card1">
            <img src={img}/>
            <div className="text">
			<h6>{profile.card.name}</h6>
			<a href={"mailto:"+profile.card.email}>
			<p><b>Email: </b>{profile.card.email}</p>
			</a>
			<p><b>phone: </b>{profile.card.mobile}</p>
			<p><b>Address: </b>{profile.card.address}</p>
			<p><b>Linkdin Profile: </b> <a href="linkdin.html"> Linkdin/varsha</a></p>
			<p><b>Naukri profile: </b> <a href="naukri.html">Naukri/varsha</a></p>
			</div>
			
			

		</div>


		<div className="card2">
		    <h4>Career Objective:</h4>
		    <ul>
		    <li>
			<p>{profile.career.info}</p>
		    </li>
		    </ul>


			<h4>Educational Qualification:</h4>
			<table className="table" border="1">
			<tr>
			<th>Course</th>
			<th>Institute</th>
			<th>Passoutyear</th>
			<th>Percentage</th>
			</tr>
			<tr className="tr">
			<td>{profile.edu.course}</td>
			<td>{profile.edu.institute}</td>
			<td>{profile.edu.passoutyear}</td>
			<td>{profile.edu.percentage}</td>
			</tr>
			<tr>
			<td>{profile.edu.course1}</td>
			<td>{profile.edu.institute1}</td>
			<td>{profile.edu.passoutyear1}</td>
			<td>{profile.edu.percentage1}</td>
			</tr>
			<tr>
			<td>{profile.edu.course2}</td>
			<td>{profile.edu.institute2}</td>
			<td>{profile.edu.passoutyear2}</td>
			<td>{profile.edu.percentage2}</td>
			</tr>
			</table>



			<h4>Technical Skills:</h4>
		    <ul>
		    <li><p>{profile.techskills.info1}</p></li>
			<li><p>{profile.techskills.info2}</p></li>
			<li><p>{profile.techskills.info3}</p></li>
			<li><p>{profile.techskills.info4}</p></li>
		    </ul>



		    <h4>Co-CurricularActivities:</h4>
		    <ul>
		    <li><p>{profile.activities.info1}</p></li>
			<li><p>{profile.activities.info2}</p></li>
			<li><p>{profile.activities.info3}</p></li>
			
		    </ul>


		    <h4>Certification:</h4>
		    <ul>
		    <li><p>{profile.certification.info1}</p></li>
			<li><p>{profile.certification.info2}</p></li>
			
		    </ul>


		    <h4>Personalitytraits:</h4>
		    <ul>
		    <li><p>{profile.perstraits.info1}</p></li>
			<li><p>{profile.perstraits.info2}</p></li>
			<li><p>{profile.perstraits.info3}</p></li>
			<li><p>{profile.perstraits.info4}</p></li>
		    </ul>
			
		
	    
		
	    </div>
	</div>
	





	


	);
};




export default Resume;