import { Fragment, lazy, Suspense } from "react";
import Banner from "./components/Banner/Banner";
import MovieList from "./components/movie/MovieList";
import "swiper/scss";
import Header from "./components/layout/Header";
import { Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
// import HomePage from "./pages/HomePage";
// import MoviePage from "./pages/MoviePage";
// import MovieDetailsPage from "./pages/MovieDetailsPage";

const HomePage = lazy(() => import("./pages/HomePage.js"));
const MoviePage = lazy(() => import("./pages/MoviePage.js"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage.js"));

function App() {
	return (
		<Fragment>
			<Suspense fallback={<></>}>
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
						<Route
							path="/movie/:movieId"
							element={<MovieDetailsPage />}
						/>
					</Route>
				</Routes>
			</Suspense>
		</Fragment>
	);
}

export default App;
