const modalContainer = document.getElementById('register-modal');
const signUpButton = document.getElementById('sign-up');
const closeButton = document.getElementById('close-modal');

const movies = [
    {
        title: 'Movie 1',
        poster: 'link to image 1',
        year: 2020,
    },
    {
        title: 'Movie 2',
        poster: 'link to image 2',
        year: 1999,
    },
    {
        title: 'Movie 3',
        poster: 'link to image 3',
        year: 2009,
    },
];

const filterFunction = function (value) {
    return value >= 9;
};

signUpButton.addEventListener('click', function () {
    console.log('awdawd');
    modalContainer.classList.add('visible');
});

closeButton.addEventListener('click', function () {
    modalContainer.classList.remove('visible');
});
