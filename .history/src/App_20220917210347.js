import { Fragment } from "react";
import { NavLink } from "react-router-dom";

function App() {
	return (
		<Fragment>
			<header className="header flex items-center justify-center gap-x-5 text-white py-20 mb-10">
				<span className="text-primary">Home</span>
				<span>Movie</span>
			</header>
			<section className="banner h-[400px] bg-white"></section>
		</Fragment>
	);
}

export default App;
