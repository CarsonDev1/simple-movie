import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { Fetcher } from "swr";
import { apiKey, fetcher } from "../config";

//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>

const MovieDetailsPage = () => {
	const { movieId } = useParams();
	const { data, error } = useSWR(
		`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
		fetcher
	);
	console.log(data);
	if (!data) return null;
	const { backdrop_path, poster_path, title, genres } = data;
	return (
		<>
			<div className="w-full h-[700px] relative">
				<div className="absolute inset-0 bg-black bg-opacity-50"></div>
				<div
					className="w-full h-full bg-cover bg-no-repeat"
					style={{
						backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
					}}
				></div>
			</div>
			<div className="w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10">
				<img
					src={`https://image.tmdb.org/t/p/original/${poster_path}`}
					className="w-full h-full object-cover rounded-xl"
					alt=""
				/>
			</div>
			<h1 className="text-center text-3xl font-bold mb-10 text-white">
				{title}
			</h1>
			{genres.length > 0 && (
				<div className="flex items-center gap-x-5 mb-10 justify-center">
					{genres.map((item) => (
						<span
							className="py-2 px-4 border-primary text-primary border rounded"
							key={item.id}
						>
							{item.name}
						</span>
					))}
				</div>
			)}
		</>
	);
};

export default MovieDetailsPage;
