import { Fragment } from "react";
import { NavLink } from "react-router-dom";

function App() {
	return (
		<Fragment>
			<header className="header flex items-center justify-center gap-x-5 text-white py-20 mb-10">
				<span className="text-primary">Home</span>
				<span>Movie</span>
			</header>
			<section className="banner h-[400px] page-container">
				<div className="w-full h-full rounded-lg relative">
					<img
						src="http://genk.mediacdn.vn/2019/8/20/1-15662898065871774855253.jpg"
						alt=""
						className="w-full h-full object-cover rounded-lg"
					/>
					<div className="absolute left-5 bottom-5 w-full text-white">
						<h2 className="font-bold text-3xl mb-5">
							Avengers: Endgame
						</h2>
						<div className="flex items-center gap-x-3">
							<span className="p-4 border border-white rounded-md">
								Adventure
							</span>
							<span className="p-4 border border-white rounded-md">
								Action
							</span>
							<span className="p-4 border border-white rounded-md">
								Drama
							</span>
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	);
}

export default App;
