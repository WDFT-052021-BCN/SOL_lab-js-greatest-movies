// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArr) {

  if (moviesArr.length === 0) {
  
    return 0;
  
  } else {

    let total = moviesArr.reduce((acc, movie) => {
      
      if(movie.score) {

        return acc + movie.score;
      
      } else {
        
        return acc;
      
      }
    }, 0);

    // you can use Number(), parseInt() or simply plus +

    return Number((total / moviesArr.length).toFixed(2));
  }
}
