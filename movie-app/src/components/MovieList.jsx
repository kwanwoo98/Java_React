import React from 'react';

const MovieList = (props) => {
	return (
		<>
			{props.movies.map((movie) => (
<<<<<<< HEAD
                <div className='image-container d-flex m-3' key={movie.imdbID}  onClick={() => props.handleClick(movie)}>
				<img src={movie.Poster} alt='movie'></img>
                <div className='overlay d-flex align-items-center justify-content-center'>
                    <span className='me-2'>{props.addMovie? '선호작 추가' : '선호작 제거'}</span>
                    <span>{props.addMovie?'❤️':'❌'}</span>
                </div>
                </div>
=======
				<div className='image-container d-flex m-3' 
					key={movie.imdbID}
					onClick={() => props.handleClick(movie)}
				>
					<img src={movie.Poster} alt='movie'></img>
					<div className='overlay d-flex align-items-center justify-content-center'>
					<span className='me-2'>{props.addMovie ? '선호작 추가' : '선호작 제거'}</span>
					<span>{props.addMovie ? '❤️' : '❌'}</span>
					</div>
				</div>
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
			))}
		</>
	);
};

export default MovieList;