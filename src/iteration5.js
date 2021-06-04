// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArr) {

  //const moviesArrCopy = moviesArr.slice()

  //const cappuccino = moviesArr

  //cappuccino.length === 3
  //moviesArr.length === 3

  //cappuccino.push(something) 

  //cappuccino.length === 4
  //moviesArr.length === 4


  const moviesArrCopy = moviesArr.map((movie) => {
    return movie
  });

  moviesArrCopy.sort(function (a, b) {
    if (a.year > b.year) {
      
      return a.year - b.year;
    
    } else if (a.year < b.year) {
    
      return a.year - b.year;

    } else {
    
      // If both movies have the same year, order them by title
      if (a.title < b.title) {
        return a.title - b.title;
      }
    }
  });

  return moviesArrCopy;
}
