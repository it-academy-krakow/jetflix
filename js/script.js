const modalContainer = document.getElementById('register-modal');
const signUpButton = document.getElementById('sign-up');
const closeButton = document.getElementById('close-modal');
const moviesSection = document.querySelector('.movies-section');
const searchBtn = document.querySelector('#search');
const searchField = document.querySelector('.search-field');
const nav = document.querySelector('.top-nav');

signUpButton.addEventListener('click', function () {
    modalContainer.classList.add('visible');
});

closeButton.addEventListener('click', function () {
    modalContainer.classList.remove('visible');
});

const createMovieElement = (movieData) => {
    const movieContainer = document.createElement('a');
    movieContainer.classList.add('movie');

    const moviePoster = document.createElement('img');
    moviePoster.src = movieData.poster_path;

    const movieTitle = document.createElement('span');
    movieTitle.textContent = movieData.title;

    movieContainer.appendChild(moviePoster);
    movieContainer.appendChild(movieTitle);

    return movieContainer;
};

const renderMovies = (movies) => {
    moviesSection.innerHTML = '';
    // const movies = filteredMovies || mockedMovies.results;

    movies.forEach((movie) => {
        const movieElement = createMovieElement(movie);
        moviesSection.appendChild(movieElement);
    });
};

let isSearchVisibile = false;

searchBtn.addEventListener('click', () => {
    isSearchVisibile = !isSearchVisibile;

    if (isSearchVisibile === true) {
        searchField.style.display = 'block';
        nav.style.display = 'none';
    } else {
        searchField.style.display = 'none';
        nav.style.display = 'block';
    }
});

searchField.addEventListener('input', (event) => {
    const text = event.target.value.toLowerCase();

    const filteredMovies = mockedMovies.results.filter((movie) => {
        return movie.original_title.toLowerCase().includes(text);
    });

    renderMovies(filteredMovies);
});

const url =
    'https://api.themoviedb.org/3/movie/popular?api_key=a5be41cb9776230a9edbf288fc44483d';

fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        console.log('response', response);
    });

renderMovies(mockedMovies.results);
