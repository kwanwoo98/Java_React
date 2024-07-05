import React from "react";

const SearchBox = (props) => {
<<<<<<< HEAD
    const handleChange = (e) => {
        props.setSearchValue (e.target.value);
    };

	return (
		<div className='col col-sm-4 me-5'>
			<input className='form-control' 
                    value={props.searchValue}
                    onChange={handleChange}
                    placeholder='영화 검색...' />
=======
	const handleChange = (e) => {
		props.setSearchValue (e.target.value);
	};

	return (
		<div className='col col-sm-4 me-5'>
			<input
				className='form-control'
				value={props.sear}
				onChange={handleChange}
				placeholder='영화 검색...'
			/>
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
		</div>
	);
};

export default SearchBox;