const numbers = [2, 4, 6, 8, 11, 15];

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// for (const number of numbers) {
//     console.log(number);
// }

function multiplyNumber(number, multiplyBy) {
    return number * multiplyBy;
}

const multipliedNumbers = [];
numbers.forEach((number) => {
    const newNum = multiplyNumber(number, 3);
    multipliedNumbers.push(newNum);
});

console.log(multipliedNumbers);

const movies = [
    {
        name: "The Godfather",
        year: 1972,
        genres: ["Crime", "Drama"],
    },
    {
        name: "The Shawshank Redemption",
        year: 1994,
        genres: ["Crime", "Drama"],
    },
    {
        name: "The Dark Knight",
        year: 2008,
        genres: ["Action", "Crime", "Drama", "Thriller"],
    },
];

const actionMoviesForEach = [];
movies.forEach((movie) => {
    let isAction = false;
    movie.genres.forEach((genre) => {
        if (genre === "Action") {
            isAction = true;
        }
    });

    if (isAction) {
        actionMoviesForEach.push(movie);
    }
});

console.log(actionMoviesForEach);

const actionMovies = movies.filter((movie) => {
    const isAction = movie.genres.includes("Action");
    return isAction;
});

console.log(actionMovies);
