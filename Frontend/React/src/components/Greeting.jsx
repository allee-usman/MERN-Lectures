const Greeting = () => {
	const myName = 'Ali Usman';
	const currDate = new Date();
	return (
		<div>
			<h1>{myName}</h1>
			<p>{currDate.getDate()}</p>
		</div>
	);
};

export default Greeting;
