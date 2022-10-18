import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard from "./MovieCard";
import "swiper/scss";
import useSWR from "swr";
import { fetcher } from "../../config";

//https://api.themoviedb.org/3/movie/now_playing?api_key=025686a275d7b7339e2bfe37230ae5df

const MovieList = () => {
	const [movie, setMovie] = useState([]);
	const { data, error } = useSWR(
		"https://api.themoviedb.org/3/movie/now_playing?api_key=025686a275d7b7339e2bfe37230ae5df",
		fetcher
	);
	useEffect(() => {
		if (data && data.results) setMovie(data.results);
	}, [data]);
	return (
		<div>
			<div className="movie-list">
				<Swiper
					grabCursor={"true"}
					spaceBetween={40}
					slidesPerView={"auto"}
				>
					{movie.length > 0 &&
						movie.map((item) => (
							<SwiperSlide>
								<MovieCard />
							</SwiperSlide>
						))}
					<SwiperSlide>
						<MovieCard />
					</SwiperSlide>
					<SwiperSlide>
						<MovieCard />
					</SwiperSlide>
					<SwiperSlide>
						<MovieCard />
					</SwiperSlide>
					<SwiperSlide>
						<MovieCard />
					</SwiperSlide>
					<SwiperSlide>
						<MovieCard />
					</SwiperSlide>
					<SwiperSlide>
						<MovieCard />
					</SwiperSlide>
					<SwiperSlide>
						<MovieCard />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default MovieList;
