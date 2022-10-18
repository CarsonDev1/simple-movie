import { Fragment } from "react";
import Banner from "./components/Banner/Banner";
import MovieList from "./components/movie/MovieList";
import "swiper/scss";
import Header from "./components/layout/Header";
import { Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";

function App() {
	return (
		<Fragment>
			<Routes>
				<Route path="/" element={<Main />}></Route>
			</Routes>
		</Fragment>
	);
}

export default App;
