import React from 'react';

const Card = ({name, username, email, id}) =>{
	return(
			<div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			  <img src ={`https://robohash.org/${id}?size=200x200`} alt = 'robots'/>
			  <div>
			    <h4>{name}</h4>
			    <h4>{username}</h4>
			    <p>{email}</p>
			  </div>
			</div>
		);
}

export default Card;