const loadMovies = () => {
  const answer = fetch('https://api.themoviedb.org/3/movie/550?api_key=c93ff76286f60844f68c3ef2077e3b72');

  console.log(answer);
}

loadMovies();