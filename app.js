let page = 1;
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');
const currentPage = document.querySelector('.currentpage');

btnNext.addEventListener('click', () =>{
  if(page <= 999) {
    page += 1;
    loadMovies();
  }
})

btnPrev.addEventListener('click', () =>{
  if(page >= 2) {
    page -= 1;
    loadMovies();
  }
})

const loadMovies = async () => {
  try {
    const answer = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=c93ff76286f60844f68c3ef2077e3b72&page=${page}`);

    if(answer.status === 200){
      const data = await answer.json();
      let movies = '';
      console.log(data)

        data.results.forEach(movie => {
        movies += `
          <div class='movie'>
            <img class="poster" src='https://image.tmdb.org/t/p/w500/${movie.poster_path}'>
            <h3 class="title">${movie.title}</h3>
            <h3 class="vote">Vote Average: ${movie.vote_average}</h3>
          </div>
          `})     
      document.getElementById('cont').innerHTML = movies;
      currentPage.innerHTML = `Page ${page} of 1000`

    } else if (answer.status === 401) {
      console.log('jr')
    } else if (answer.status === 404) {
      console.log('j')
    } else {
      console.log('hubo un error')
    }
    
  } catch {
    console.log(err);
  }
}

loadMovies();