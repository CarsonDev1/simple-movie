export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "025686a275d7b7339e2bfe37230ae5df";
export const tmdbAPI = {
	//https://api.themoviedb.org/3/movie/now_playing?api_key=025686a275d7b7339e2bfe37230ae5df
	getMovieList: (type) =>
		`https://api.themoviedb.org/3/movie/now_playing?api_key=025686a275d7b7339e2bfe37230ae5df`,
};
