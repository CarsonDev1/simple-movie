import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard from "./MovieCard";
import "swiper/scss";

//https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>

const MovieList = () => {
	return (
		<div>
			<div className="movie-list">
				<Swiper
					grabCursor={"true"}
					spaceBetween={40}
					slidesPerView={"auto"}
				>
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
					<SwiperSlide>
						<MovieCard />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default MovieList;
