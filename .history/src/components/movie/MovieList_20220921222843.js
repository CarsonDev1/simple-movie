import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard from "./MovieCard";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";

//https://api.themoviedb.org/3/movie/now_playing?api_key=025686a275d7b7339e2bfe37230ae5df

const MovieList = ({ type = "now_playing" }) => {
	const { data } = useSWR(tmdbAPI.getMovieList(type), fetcher);
	const movie = data?.results || [];

	return (
		<div className="movie-list">
			<Swiper
				grabCursor={"true"}
				spaceBetween={40}
				slidesPerView={"auto"}
			>
				{movie.length > 0 &&
					movie.map((item) => (
						<SwiperSlide key={item.id}>
							<MovieCard item={item} />
						</SwiperSlide>
					))}
			</Swiper>
		</div>
	);
};

export default MovieList;
