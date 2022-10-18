import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard from "./MovieCard";
import "swiper/scss";
import useSWR from "swr";

//https://api.themoviedb.org/3/movie/now_playing?api_key=025686a275d7b7339e2bfe37230ae5df

const MovieList = () => {
	const { data, error } = useSWR("/api/user/123", fetcher);
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
