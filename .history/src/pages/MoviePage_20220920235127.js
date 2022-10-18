import React, { useEffect, useState } from "react";
import useSWR from "swr";
import MovieCard from "../components/movie/MovieCard";
import MovieList from "../components/movie/MovieList";
import { fetcher } from "../config";
import useDebounce from "../hooks/useDebounce";

//https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>
const pageCount = 5l
const MoviePage = () => {
	const [nextPage, setNextPage] = useState(1);
	const [filter, setFilter] = useState("");
	const [url, setUrl] = useState(
		`https://api.themoviedb.org/3/movie/popular?api_key=025686a275d7b7339e2bfe37230ae5df&page=${nextPage}`
	);
	const filterDebounce = useDebounce(filter, 500);
	const handleFilterChange = (e) => {
		setFilter(e.target.value);
	};
	const { data, error } = useSWR(url, fetcher);
	const loading = !data && !error;
	useEffect(() => {
		if (filterDebounce) {
			setUrl(
				`https://api.themoviedb.org/3/search/movie?api_key=025686a275d7b7339e2bfe37230ae5df&query=${filterDebounce}&page=${nextPage}`
			);
		} else {
			setUrl(
				"https://api.themoviedb.org/3/movie/popular?api_key=025686a275d7b7339e2bfe37230ae5df"
			);
		}
	}, [filterDebounce, nextPage]);
	if (!data) return null;
	const movie = data?.results || [];
	const { page, total_pages } = data;
	return (
		<div className="py-10 page-container">
			<div className="flex mb-10">
				<div className="flex-1">
					<input
						type="text"
						className="w-full p-4 bg-slate-800 text-white outline-none"
						placeholder="Search here..."
						onChange={handleFilterChange}
					/>
				</div>
				<button className="p-4 bg-primary text-white">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth="2"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</button>
			</div>
			{loading && (
				<div className="w-10 h-10 rounded-full border-4 border-primary border-t-transparent border-t-4 mx-auto animate-spin mb-2"></div>
			)}
			<div className="grid grid-cols-4 gap-10">
				{!loading &&
					movie.length > 0 &&
					movie.map((item) => (
						<MovieCard key={item.id} item={item} />
					))}
			</div>
			<div className="flex items-center justify-center mt-10 gap-x-5">
				<span className=" cursor-pointer">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth="2"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15 19l-7-7 7-7"
						/>
					</svg>
				</span>
				<span className="p-2 inline-block cursor-pointer leading-none py-2 px-4 bg-white text-slate-900 rounded">
					1
				</span>
				<span className=" cursor-pointer">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth="2"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</span>
			</div>
		</div>
	);
};
export default MoviePage;
