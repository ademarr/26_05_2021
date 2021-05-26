import React from "react";

const Profile = (props) => {
	let userId = window.location.pathname.split("/")[2];
	let user = props.function(userId);
	//console.log(userId);
	return (
		<div className='row'>
			<div className='col-sm-3'>
				<img src={user.avatar} alt='' width='90%' />
			</div>
			<div className='col-sm-9'>
				<h1>
					{user.name} {user.lastname}
				</h1>
				<h3>{user.about} </h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eum aliquid aliquam
					accusamus. Corrupti, ullam minus eius ea placeat ex libero, dicta modi distinctio sapiente
					et dignissimos, adipisci eum ratione.
				</p>
			</div>
		</div>
	);
};

export default Profile;