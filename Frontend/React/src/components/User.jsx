const User = ({ name, age, isMarried, hobbies }) => {
	return (
		<div>
			<h1>Name: {name}</h1>
			<p>Age: {age}</p>
			<p>Hobbies:</p>
			<ul>
				{hobbies.map((hobby) => (
					<li key={Math.random()}>{hobby}</li>
				))}
			</ul>
		</div>
	);
};

export default User;
