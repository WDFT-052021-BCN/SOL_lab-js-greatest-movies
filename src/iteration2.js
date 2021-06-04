// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArr) {
  
  return moviesArr.filter(
    (movie) =>
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  ).length;
}

//Or
function howManyMovies(moviesArr) {

  const filterBySpielberg = moviesArr.filter((movie) => {
    return movie.director === 'Steven Spielberg';
  });

  const filterByGenre = filterBySpielberg.filter((movie) => {
    return movie.genre.includes('Drama');
  });

  return filterByGenre.length;
}









function howManyMovies(moviesArr) {
  
  const filteredMovies = moviesArr
    .filter((movie) => {
      return movie.director === 'Steven Spielberg';
    })
    .filter((movie) => {
      return movie.genre.includes('Drama');
    });

  return filteredMovies.length;
}
