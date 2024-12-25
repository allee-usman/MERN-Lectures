const List = () => {
	const fruits = ['Apple', 'Mango', 'Orange', 'Banana'];

	return (
		<div>
			<h1>Fruits List</h1>
			{fruits.map((fruit) => (
				<ul key={fruit}>
					<li>{fruit}</li>
				</ul>
			))}
		</div>
		//Here "key" attribute is used as an identifier for rach element of array. This will help us in future when we are working with states and dynamically manipulating array i.e push() or pop()
	);
};

export default List;
