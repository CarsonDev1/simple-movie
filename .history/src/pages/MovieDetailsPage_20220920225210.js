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
	const { backdrop_path, poster_path, title, genres, overview } = data;
	return (
		<div className="py-10">
			<div className="w-full h-[700px] relative mx-auto rounded">
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
			<h1 className="text-center text-4xl font-bold mb-10 text-white">
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
			<p className="text-center leading-relaxed max-w-[600px] mx-auto mb-10">
				{overview}
			</p>
			<MovieCredits />
			<MovieVideo />
			<MovieSimilar />
		</div>
	);
};
function MovieCredits() {
	const { movieId } = useParams();
	const { data, error } = useSWR(
		`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`,
		fetcher
	);
	if (!data) return null;
	const { cast } = data;
	if (!cast || cast.length <= 0) return null;
	return (
		<div className="py-10">
			<h2 className="text-center text-3xl mb-10">Casts</h2>
			<div className="grid grid-cols-4 gap-5 page-container">
				{cast.slice(0, 4).map((item) => (
					<div className="cast-item" key={item.id}>
						<img
							src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
							className="w-full h-[350px] object-cover rounded-lg mb-3"
							alt=""
						/>
						<h3 className="text-xl font-medium">{item.name}</h3>
					</div>
				))}
			</div>
		</div>
	);
}

function MovieVideo() {
	const { movieId } = useParams();
	const { data, error } = useSWR(
		`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`,
		fetcher
	);
	if (!data) return null;
	const { results } = data;
	console.log(data);
	if (!results || results.length <= 0) return null;
	return (
		<div className="py-10">
			<div className="flex flex-col gap-10">
				{results.slice(0, 3).map((item) => (
					<div className="" key={item.id}>
						<h3 className="mb-5 text-xl font-medium text-white text-center">
							{item.name}
						</h3>
						<div
							key={item.id}
							className="w-[1280px] mx-auto aspect-video"
						>
							<iframe
								width="1280"
								height="720"
								src={`https://www.youtube.com/embed/${item.key}`}
								title="Youtube video player"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen
								className="w-full h-full object-fill"
							></iframe>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
function MovieSimilar() {
	return (
		<div className="py-10">
			<h2 className="text-3xl font-medium mb-10">Similar Movies</h2>
		</div>
	);
}

export default MovieDetailsPage;
