export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "025686a275d7b7339e2bfe37230ae5df";
const tmdbEndpoint = "https://api.themoviedb.org/3/movie";
export const tmdbAPI = {
	//https://api.themoviedb.org/3/movie/now_playing?api_key=025686a275d7b7339e2bfe37230ae5df
	getMovieList: (type, page = 1) =>
		`${tmdbEndpoint}/${type}?api_key=${apiKey}&page=${page}`,
	getMovieDetails: (movieId) =>
		`${tmdbEndpoint}/${movieId}?api_key=${apiKey}`,
	getMovieMeta: (movieId, type) =>
		`${tmdbEndpoint}/${movieId}/${type}?api_key=${apiKey}`,
	imageOriginal: (url) => `https://image.tmdb.org/t/p/original/${url}`,
	image500: (url) => `https://image.tmdb.org/t/p/w500/${url}`,
};
