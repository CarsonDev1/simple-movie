import React from "react";
import useSWR from "swr";
import { fetcher } from "../../config";

const Banner = () => {
	const { data } = useSWR(
		`https://api.themoviedb.org/3/movie/upcoming?api_key=025686a275d7b7339e2bfe37230ae5df`,
		fetcher
	);
	const movie = data?.results || [];

	return (
		<div>
			<section className="banner h-[500px] page-container mb-20">
				<div className="w-full h-full rounded-lg relative">
					<div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.3)] rounded-lg"></div>
					<img
						src="http://genk.mediacdn.vn/2019/8/20/1-15662898065871774855253.jpg"
						alt=""
						className="w-full h-full object-cover rounded-lg"
					/>
					<div className="absolute left-5 bottom-5 w-full text-white">
						<h2 className="font-bold text-3xl mb-5">
							Avengers: Endgame
						</h2>
						<div className="flex items-center gap-x-3 mb-8">
							<span className="py-2 px-4 border border-white rounded-md">
								Adventure
							</span>
							<span className="py-2 px-4 border border-white rounded-md">
								Action
							</span>
							<span className="py-2 px-4 border border-white rounded-md">
								Drama
							</span>
						</div>
						<button className="py-3 px-6 rounded-lg bg-primary text-white font-medium">
							Watch
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Banner;
