// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArr) {

  const orderedMovies = moviesArr
    
    .map((movie) => {
      return movie.title;
    })

    .sort((a, b) => {
      return a.title.localeCompare(b.title)
    })
    
    .slice(0, 20);
  
  
    return orderedMovies;
}
