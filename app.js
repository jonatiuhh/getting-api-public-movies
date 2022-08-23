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

const loadMovies = async () => {
  try {
    const answer = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=c93ff76286f60844f68c3ef2077e3b72&page=${page}`);

    if(answer.status === 200){
      const data = await answer.json();
      let movies = '';

      data.results.forEach(movie => {
        movies += `
          <div class='movie'>
            <img class="poster" src='https://image.tmdb.org/t/p/w500/${movie.poster_path}'>
            <h3 class="title">${movie.title}</h3>
          </div>
          `;
      })
      document.getElementById('cont').innerHTML += movies;
      currentPage.innerHTML = `Page ${page}`
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