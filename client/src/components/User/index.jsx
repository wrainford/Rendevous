import React from "react";


const User = (props) => {
	return (
		<>
			<h1>{props.props.userName}</h1>
			<div>
				<p>{props.props.name}</p>
				<p>{props.props.email}</p>
                <p>{props.props.project}</p>
			</div>
		</>
	);
}


export default User;