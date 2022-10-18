import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

const MovieCard = ({ item }) => {
	const { title, vote_average, release_date, poster_path, id } = item;
	const navigate = useNavigate();
	return (
		<div>
			<div className="movie-card rounded-lg p-3 bg-slate-800 text-white select-none ">
				<img
					src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
					alt=""
					className="w-full h-[250px] object-cover rounded-lg mb-5 ease-in-out delay-75 hover:-translate-y-0.5 hover:scale-110 duration-100"
				/>
				<h3 className=" text-sm font-bold mb-3">{title}</h3>
				<div className="flex items-center justify-between text-sm opacity-50 mb-10">
					<span>{new Date(release_date).getFullYear()}</span>
					<span>{vote_average}</span>
				</div>
				<Button bgColor="secondary" />
			</div>
		</div>
	);
};

export default MovieCard;
