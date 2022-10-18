import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard, { MovieCardSkelenton } from "./MovieCard";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";

//https://api.themoviedb.org/3/movie/now_playing?api_key=025686a275d7b7339e2bfe37230ae5df

const MovieList = ({ type = "now_playing" }) => {
	const { data, error } = useSWR(tmdbAPI.getMovieList(type), fetcher);
	const isLoading = !data && !error;
	const movie = data?.results || [];

	return (
		<div className="movie-list">
			{isLoading && (
				<>
					<Swiper
						grabCursor={"true"}
						spaceBetween={40}
						slidesPerView={"auto"}
					>
						<SwiperSlide>
							<MovieCardSkelenton />
						</SwiperSlide>
					</Swiper>
				</>
			)}
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

MovieList.propTypes = {
	type: PropTypes.string.isRequired,
};

function FallbackComponent() {
	return (
		<p className="bg-red-50 text-red-400">
			Something went wrong with this components
		</p>
	);
}

export default withErrorBoundary(MovieList, {
	FallbackComponent,
});
