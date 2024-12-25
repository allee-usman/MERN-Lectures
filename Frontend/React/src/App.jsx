// Components are independent and reuseable bits of code. They serve the same purpose as JS functions, but work in isolation and return HTML.
/*
Rules:
1) First letter of component name should be Upper Case.
2) It should retuen some HTML.
3) Can be created using function keyword or Arrow function expression.



*/
// import Footer from './components/Footer';
// import Header from './components/Header';
// import Main from './components/Main';

// import User from './components/User';

// import List from './components/List';

// import Greeting from './components/Greeting';
// import ProductInfo from './components/ProductInfo';

//function expression
// function App() {
//   return <h1>Hello, World!</h1>;
// }

// export default App; // render component

// Arrow Syntax
// const App = () => {
// 	return (
// 		<div>
// 			{/* <Greeting /> */}
// 			{/* <ProductInfo /> */}
// 			{/* <List /> */}
// 		</div>
// 	);
// };
// export default App;

/*
JSX:
JSX allows us to write HTML in React. JSX make it easier to write and add HTML in React.
Example:
const Component = () => {
	return (
		<section id="section">
			<h1>My Website</h1>
			<article>
				<h2>Welcome to React</h2>
				<p className="text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, earum?
				</p>
			</article>
		</section>
	);
};

Now you might wondering why we can't just called it HTML. why JSX? Well This is not exactly HTML file, since we are working in JS file and we are gicing illusion of HTML. BTS the compiler will compile pure JS code, That's why it is called JSX( Javascript XML). e.g className.
Go to babeljs.io and see the conversion.

Rules:
1) From one component you are allowd to send only one parent.
2) You have to close all of the tags. i.e <img src=""> allowd in HTML but not in JSx. In JSX it should be <img src="" />
3) To provide a class name to a tag, "className" should be used. In HTML it is "class".
4) Can't use "for" attribute in label tag to refer to a particulat input field. Instead use "htmlFor" e.g:
cconst Form = () => {
	return (
		<form >
      <label htmlFor="name">Name</label>
      <input type="text" placeholder='Your name' />
    </form>
	);
};

*/

/*
Expression in JSX:
With JSX, we can write expression inside curly braces. The expression can be a React variable, a property or any other valid JS expression. JSX will execute that expression and then return the result.
Example:
const MyApp = () => {
	const myName = 'Ali Usman';
	const sum = (a, b) => a * b;
	const specialClass = 'class-name';

	return (
		<section>
			<h1>{myName}</h1>
			<p>Sum of 2 and 3 is {sum(2, 3)}</p>
			<p className={specialClass}>This is a special class</p>
		</section>
	);
};
export default MyApp;


*/

/*
Rendering Lists:
In React, lists are render with some kind of loop. The JS map() array method is generally the preferred method.
*/

/*
PROPS:
Props/properties are arguments passed to react component.
Props allow us to pass data from parent component to child component.
Props are passed to component via HTML attributes.
Example:
const App = () => {
	return (
		<User
			name="Ali Usman"
			age={18}
			isMarried={false}
			hobbies={['Reading', 'Gardening', 'Graphic Designing']}
		/>
	);
};

export default App;

*/
