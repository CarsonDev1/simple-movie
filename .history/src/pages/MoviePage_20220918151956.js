import React from "react";
import MovieList from "../components/movie/MovieList";

const MoviePage = () => {
	return (
		<div className="py-10 ">
			<MovieList type="latest" />
		</div>
	);
};

export default MoviePage;
