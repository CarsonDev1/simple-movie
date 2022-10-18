import React from "react";

const MovieCard = ({ item }) => {
	const { title, vote_average, release_date } = item;
	return (
		<div>
			<div className="movie-card rounded-lg p-3 bg-slate-800 text-white">
				<img
					src="https://www.axn-asia.com/sites/axn-asia.com/files/ct_series_f_primary_image/spiderman_homecoming_-_keyart.jpg"
					alt=""
					className="w-full h-[250px] object-cover rounded-lg mb-5"
				/>
				<h3 className=" text-sm font-bold mb-3">
					Spiderman: Homecoming
				</h3>
				<div className="flex items-center justify-between text-sm opacity-50 mb-10">
					<span>2017</span>
					<span>8.5</span>
				</div>
				<button className="py-3 px-6 rounded-lg capitalize bg-primary w-full">
					Watch Now
				</button>
			</div>
		</div>
	);
};

export default MovieCard;
