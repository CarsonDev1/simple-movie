import React from "react";
import useSWR from "swr";
import MovieCard from "../components/movie/MovieCard";
import MovieList from "../components/movie/MovieList";
import { fetcher } from "../config";

const MoviePage = () => {
	const { data } = useSWR(
		`https://api.themoviedb.org/3/movie/popular?api_key=025686a275d7b7339e2bfe37230ae5df`,
		fetcher
	);
	const movie = data?.results || [];
	return (
		<div className="py-10 page-container">
			<div className="flex">
				<div className="flex-1">
					<input
						type="text"
						className="w-full"
						placeholder="Search here..."
					/>
				</div>
				<button>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth="2"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</button>
			</div>
			<div className="grid grid-cols-5 gap-10">
				{movie.length > 0 &&
					movie.map((item) => (
						<MovieCard key={item.id} item={item} />
					))}
			</div>
		</div>
	);
};

export default MoviePage;
