// Post Component
import React from "react";


function User(props) {
	return (
		<>
			<h1>{props.userName}</h1>
			<div>
				<p>{props.name}</p>
				<p>{props.email}</p>
                <p>{props.project}</p>
			</div>
		</>
	);
}


export default User;