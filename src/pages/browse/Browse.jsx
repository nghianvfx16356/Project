import React from 'react';
import { requests } from '../../components/API/Api';
import Header from '../../components/header/Header';
import MoviesList from '../../components/MoviesList/MoviesList';


function Browse() {
	return (
		<div className="app">
			<Header />
			<MoviesList data={requests.fetchNetflixOriginals} />
			<MoviesList data={requests.fetchTrending} />
			<MoviesList data={requests.fetchTopRated} />
			<MoviesList data={requests.fetchActionMovies} />
			<MoviesList data={requests.fetchComedyMovies} />
			<MoviesList data={requests.fetchHorrorMovies} />
			<MoviesList data={requests.fetchRomanceMovies} />
			<MoviesList data={requests.fetchDocumentaries} />
		</div>
	);
}

export default Browse;

