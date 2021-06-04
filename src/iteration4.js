// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArr) {
  
  if (!moviesArr.length) {
  
    return 0;
  
  } else {
  
    let dramaMovies = moviesArr.filter((movie) =>
      movie.genre.includes('Drama')
    );
  
    return scoresAverage(dramaMovies);
  }
}
