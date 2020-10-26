import React from "react";
import "./App.css";
import DogsList from "./DogsList";
import ErrorBoundary from "./ErrorBoundary";

function App() {
	return (
		<div className="App">
			<ErrorBoundary>
				<DogsList/>
			</ErrorBoundary>
		</div>
	);
}

export default App;
