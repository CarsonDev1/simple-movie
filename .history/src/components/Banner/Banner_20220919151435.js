import React from "react";
import useSWR from "swr";
import { fetcher } from "../../config";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { useNavigate } from "react-router-dom";

const Banner = ({ item }) => {
	const { data } = useSWR(
		`https://api.themoviedb.org/3/movie/upcoming?api_key=025686a275d7b7339e2bfe37230ae5df`,
		fetcher
	);
	const movie = data?.results || [];

	return (
		<section className="banner h-[500px] page-container mb-20 overflow-hidden">
			<Swiper
				centeredSlides={true}
				slidesPerView={"auto"}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
			>
				{movie.length > 0 &&
					movie.map((item) => (
						<SwiperSlide key={item.id}>
							<BannerItem item={item} />
						</SwiperSlide>
					))}
			</Swiper>
		</section>
	);
};
function BannerItem({ item }) {
	const { title, poster_path, id, genres } = item;
	const navigate = useNavigate();

	return (
		<div className="w-full h-full rounded-lg relative">
			<div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.3)] rounded-lg"></div>
			<img
				src={`https://image.tmdb.org/t/p/original/${poster_path}`}
				alt=""
				className="w-full h-full object-cover rounded-lg"
			/>
			<div className="absolute left-5 bottom-5 w-full text-white">
				<h2 className="font-bold text-3xl mb-5">{title}</h2>

				<button
					onClick={() => navigate(`/movie/${id}`)}
					className="py-3 px-6 rounded-lg bg-primary text-white font-medium"
				>
					Watch
				</button>
			</div>
		</div>
	);
}
export default Banner;
