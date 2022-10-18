import React from "react";
import { useNavigate } from "react-router-dom";
import { tmdbAPI } from "../../config";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import LoadingSkeleton from "../Loading/LoadingSkeleton";

const MovieCard = ({ item }) => {
	const { title, vote_average, release_date, poster_path, id } = item;
	const navigate = useNavigate();
	return (
		<div className="movie-card rounded-lg p-3 bg-slate-800 text-white select-none ">
			<img
				src={tmdbAPI.image500(poster_path)}
				alt=""
				className="w-full h-[250px] object-cover rounded-lg mb-5 ease-in-out delay-75 hover:-translate-y-0.5 hover:scale-110 duration-100"
			/>
			<h3 className=" text-sm font-bold mb-3">{title}</h3>
			<div className="flex items-center justify-between text-sm opacity-50 mb-10">
				<span>{new Date(release_date).getFullYear()}</span>
				<span>{vote_average}</span>
			</div>
			<Button
				bgColor="primary"
				onClick={() => navigate(`/movie/${id}`)}
				full
			>
				Watch Now
			</Button>
		</div>
	);
};
MovieCard.propTypes = {
	item: PropTypes.shape({
		title: PropTypes.string,
		vote_average: PropTypes.number,
		release_date: PropTypes.string,
		poster_path: PropTypes.string,
		id: PropTypes.number,
	}),
};

function FallbackComponent() {
	return (
		<p className="bg-red-50 text-red-400">
			Something went wrong with this components
		</p>
	);
}

export default withErrorBoundary(MovieCard, {
	FallbackComponent,
});

const MovieCardSkelenton = () => {
	return (
		<div className="movie-card rounded-lg p-3 bg-slate-800 text-white select-none ">
			<LoadingSkeleton
				width="100%"
				height="250px"
				radius="8px"
				className="mb-5"
			/>
			<h3 className=" text-sm font-bold mb-3">
				{<LoadingSkeleton width="100%" height="20px" />}
			</h3>
			<div className="flex items-center justify-between text-sm opacity-50 mb-10">
				<span>
					<LoadingSkeleton width="50px" height="10px" />
				</span>
				<span>
					<LoadingSkeleton width="30px" height="10px" />
				</span>
			</div>
			<Button bgColor="primary" full>
				Watch Now
			</Button>
		</div>
	);
};
