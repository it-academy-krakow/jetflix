const modalContainer = document.getElementById('register-modal');
const signUpButton = document.getElementById('sign-up');
const closeButton = document.getElementById('close-modal');
const moviesSection = document.querySelector('.movies-section');

signUpButton.addEventListener('click', function () {
    console.log('awdawd');
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

const renderMovies = () => {
    const movies = mockedMovies.results;

    movies.forEach((movie) => {
        const movieElement = createMovieElement(movie);
        moviesSection.appendChild(movieElement);
    });
};

renderMovies();
