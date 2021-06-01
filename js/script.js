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

// for (let i = 0; i < 3; i++) {
//     const movieTitle = movies
//     console.log()
// }

const numbers = [8, 5, 3, 9, 10, 22];
numbers.push(100);

const newNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 9) {
        newNumbers.push(numbers[i]);
    }
}

const filterFunction = function (value) {
    return value >= 9;
};
const newNumbersFilter = numbers.filter(filterFunction);

console.log(newNumbersFilter);
