import React from 'react';
import NavBar from '../../components/navbar/Navbar';
import SearchForm from '../../components/SearchForm/SearchForm';
import './search.css';

const Search = () => {
	return (
		<div className='app'>
			<NavBar className='navbar' />
			<SearchForm className='searchfrom' />
		</div>
	);
};

export default Search;
