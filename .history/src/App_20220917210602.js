import { Fragment } from "react";
import { NavLink } from "react-router-dom";

function App() {
	return (
		<Fragment>
			<header className="header flex items-center justify-center gap-x-5 text-white py-20 mb-10">
				<span className="text-primary">Home</span>
				<span>Movie</span>
			</header>
			<section className="banner h-[400p] page-container">
				<div className="w-full h-full rounded-lg relative">
					<img
						src="http://genk.mediacdn.vn/2019/8/20/1-15662898065871774855253.jpg"
						alt=""
					/>
				</div>
			</section>
		</Fragment>
	);
}

export default App;
