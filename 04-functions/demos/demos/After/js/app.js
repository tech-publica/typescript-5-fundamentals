"use strict";
function GetAllMovies() {
    return [
        { title: 'A New Hope', director: 'George Lucas', yearReleased: 1977, streaming: true },
        { title: 'The Empire Strikes Back', director: 'Irvin Kershner', yearReleased: 1980, streaming: false },
        { title: 'Return of the Jedi', director: 'Richard Marquand', yearReleased: 1983, streaming: true },
        { title: 'The Phantom Menace', director: 'George Lucas', yearReleased: 1999, streaming: false },
        { title: 'Attack of the Clones', director: 'George Lucas', yearReleased: 2002, streaming: true },
        { title: 'Revenge of the Sith', director: 'George Lucas', yearReleased: 2005, streaming: true },
        { title: 'The Force Awakens', director: 'J.J. Abrams', yearReleased: 2015, streaming: false },
        { title: 'The Last Jedi', director: 'Rian Johnson', yearReleased: 2017, streaming: true },
        { title: 'The Rise of Skywalker', director: 'J.J. Abrams', yearReleased: 2019, streaming: true }
    ];
}
function GetReview(title) {
    if (title == 'A New Hope') {
        return 'An instant classic!';
    }
    else {
        return Math.floor(Math.random() * 10);
    }
}
function PrintMovieInfo(title, yearReleased, ...cast) {
    console.log(`Title: ${title}`);
    console.log(`Year Released: ${yearReleased}`);
    console.log('Cast:');
    for (const name of cast) {
        console.log(`  ${name}`);
    }
}
function GetTitles(director, streaming) {
    const allMovies = GetAllMovies();
    const searchResults = [];
    if (streaming !== undefined) {
        for (let movie of allMovies) {
            if (movie.director === director && movie.streaming === streaming) {
                searchResults.push(movie.title);
            }
        }
    }
    else {
        for (let movie of allMovies) {
            if (movie.director === director) {
                searchResults.push(movie.title);
            }
        }
    }
    return searchResults;
}
function CreateMovieID(name, id) {
    return name + id;
}
let x;
x = 5;
let IdGenerator;
IdGenerator = (name, id) => name + id;
let newID = IdGenerator('jedi', 20);
console.log(newID);
