import React from "react";
import './index.css';


const User = (props) => {
	return (
		<>
		
			<div className="prof-container">
			<img src = {`/uploads/postImages/${props.props.avatar}`} alt="..." style= {{width: "80%"}}/>
			<h1 className="prof-username">{props.props.userName}</h1>
				<h2 className="prof-name">{props.props.name}</h2>


				{/* <h2>{props.props.languages}</h2>
                <p>{props.props.project}</p> */}
			</div>
		</>
	);
}


export default User;