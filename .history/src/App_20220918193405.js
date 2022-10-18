import { Fragment } from "react";
import Banner from "./components/Banner/Banner";
import MovieList from "./components/movie/MovieList";
import "swiper/scss";
import Header from "./components/layout/Header";
import { Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";

function App() {
	return (
		// <Fragment>
		<Routes>
			<Route element={<Main />}>
				<Route
					path="/"
					element={
						<>
							<Banner />
							<HomePage />
						</>
					}
				></Route>
				<Route path="/movies" element={<MoviePage />} />
				<Route path="/movie/:movieId" element={<MovieDetailsPage />} />
			</Route>
		</Routes>
		// </Fragment>
	);
}

export default App;
