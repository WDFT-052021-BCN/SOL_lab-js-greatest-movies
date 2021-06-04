// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

function getAllSingleDirectors(moviesArr) {

  const directors = getAllDirectors(moviesArr);

  return directors.filter((director) => {
    return !directors.includes(director) ;
  });

}
