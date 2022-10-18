import React, { useEffect, useState } from "react";
import useSWR from "swr";
import MovieCard, { MovieCardSkelenton } from "../components/movie/MovieCard";
import { fetcher, tmdbAPI } from "../config";
import useDebounce from "../hooks/useDebounce";
import ReactPaginate from "react-paginate";

//https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>

const itemsPerPage = 20;
const MoviePage = () => {
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);
	const [nextPage, setNextPage] = useState(1);
	const [filter, setFilter] = useState("");
	const [url, setUrl] = useState(tmdbAPI.getMovieList("popular", nextPage));
	const filterDebounce = useDebounce(filter, 500);
	const handleFilterChange = (e) => {
		setFilter(e.target.value);
	};
	const { data, error } = useSWR(url, fetcher);
	const loading = !data && !error;
	useEffect(() => {
		if (filterDebounce) {
			setUrl(tmdbAPI.getMovieSearch(filterDebounce, nextPage));
		} else {
			setUrl(tmdbAPI.getMovieList("popular", nextPage));
		}
	}, [filterDebounce, nextPage]);
	const movie = data?.results || [];
	useEffect(() => {
		if (!data || !data.total_results) return;
		setPageCount(Math.ceil(data.total_results / itemsPerPage));
	}, [data, itemOffset]);

	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % data.total_results;
		setItemOffset(newOffset);
		setNextPage(event.selected + 1);
	};
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
						onClick={() => setNextPage(nextPage - 1)}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</button>
			</div>
			{/* {loading && (
				<div className="w-10 h-10 rounded-full border-4 border-primary border-t-transparent border-t-4 mx-auto animate-spin mb-2"></div>
			)} */}
			{loading && (
				<div className="grid grid-cols-4 gap-10">
					<MovieCardSkelenton />
				</div>
			)}
			<div className="grid grid-cols-4 gap-10">
				{!loading &&
					movie.length > 0 &&
					movie.map((item) => (
						<MovieCard key={item.id} item={item} />
					))}
			</div>
			<div className="mt-10">
				<ReactPaginate
					breakLabel="..."
					nextLabel="next >"
					onPageChange={handlePageClick}
					pageRangeDisplayed={5}
					pageCount={pageCount}
					previousLabel="< previous"
					renderOnZeroPageCount={null}
					className="pagination"
				/>
			</div>
		</div>
	);
};
export default MoviePage;
