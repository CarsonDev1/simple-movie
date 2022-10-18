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
		<div className="py-10 ">
			<div className="grid grid-cols-4 gap-10 h-[400px]">
				{movie.length > 0 &&
					movie.map((item) => (
						<MovieCard key={item.id} item={item} />
					))}
			</div>
		</div>
	);
};

export default MoviePage;
