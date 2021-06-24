const modalContainer = document.getElementById('register-modal');
const signUpButton = document.getElementById('sign-up');
const closeButton = document.getElementById('close-modal');

const getMovies = function () {
    // taken from file mocked-movies.js
    return mockedMovies;
};

const createMovieElement = (movieData) => {
    const movieContainer = document.createElement('a');
    movieContainer.classList.add('movie');

    const moviePoster = document.createElement('img');
    moviePoster.src = movieData.poster_path;
    moviePoster.alt = movieData.title;

    const movieTitle = document.createElement('span');
    movieTitle.textContent = movieData.title;

    movieContainer.appendChild(moviePoster);
    movieContainer.appendChild(movieTitle);

    return movieContainer;
};

const renderMovies = () => {
    const moviesSection = document.querySelector('.movies-section');
    const movies = getMovies().results;

    movies.forEach(function (movieData) {
        const movie = createMovieElement(movieData);
        moviesSection.appendChild(movie);
    });
};

renderMovies();

signUpButton.addEventListener('click', function () {
    console.log('awdawd');
    modalContainer.classList.add('visible');
});

closeButton.addEventListener('click', function () {
    modalContainer.classList.remove('visible');
});
