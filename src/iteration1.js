// Iteration 1: All directors? - Get the array of all directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?



function getAllDirectors(moviesArr) {
  
  // const directorsArray = moviesArr.map(directors);
  
  // function directors(movie) {
  //   return movie.director
  // }

  // const directorsArray = moviesArr.map(function(movie){
  //   return movie.director;
  // });

  const directorsArray = moviesArr.map((movie) => {
    return movie.director
  })


  return directorsArray

}


