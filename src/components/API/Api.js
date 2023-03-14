

export const ApiConfig = {
    baseUrl: `https://api.themoviedb.org/3`,
    API_KEY: `1825ebca1f9d0006e206c485b2c908cb`,
    originalImage: `https://image.tmdb.org/t/p/original`,
    w500Image: `https://image.tmdb.org/t/p/w500`,
}

export const requests = {
	fetchTrending: `${ApiConfig.baseUrl}/trending/all/week?api_key=${ApiConfig.API_KEY}&language=en-US`,
	fetchNetflixOriginals: `${ApiConfig.baseUrl}/discover/tv?api_key=${ApiConfig.API_KEY}&with_network=123`,
	fetchTopRated: `${ApiConfig.baseUrl}/movie/top_rated?api_key=${ApiConfig.API_KEY}&language=en-US`,
	fetchActionMovies: `${ApiConfig.baseUrl}/discover/movie?api_key=${ApiConfig.API_KEY}&with_genres=28`,
	fetchComedyMovies: `${ApiConfig.baseUrl}/discover/movie?api_key=${ApiConfig.API_KEY}&with_genres=35`,
	fetchHorrorMovies: `${ApiConfig.baseUrl}/discover/movie?api_key=${ApiConfig.API_KEY}&with_genres=27`,
	fetchRomanceMovies: `${ApiConfig.baseUrl}/discover/movie?api_key=${ApiConfig.API_KEY}&with_genres=10749`,
	fetchDocumentaries: `${ApiConfig.baseUrl}/discover/movie?api_key=${ApiConfig.API_KEY}&with_genres=99`,
	fetchSearch: `${ApiConfig.baseUrl}/search/movie?api_key=${ApiConfig.API_KEY}&language=en-US`,
};