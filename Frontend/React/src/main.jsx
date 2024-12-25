import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import components from "App.jsx" file
import App from './App.jsx';

// get tag with "root" id from index.html and render "App" component
createRoot(document.getElementById('root')).render(
	<StrictMode>
		<App />
	</StrictMode>
);
