"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Purge = exports.logSearchResults = exports.getMoviesByDirector = exports.GetTitles = exports.PrintMovieInfo = exports.GetAllMovies = void 0;
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
exports.GetAllMovies = GetAllMovies;
function GetReview(title) {
    if (title == 'A New Hope') {
        return 'An instant classic!';
    }
    else {
        return Math.floor(Math.random() * 10);
    }
}
function PrintMovieInfo(movie) {
    console.log(`Title: ${movie.title}`);
    console.log(`Year Released: ${movie.yearReleased}`);
    console.log(`Director: ${movie.director}`);
}
exports.PrintMovieInfo = PrintMovieInfo;
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
exports.GetTitles = GetTitles;
function getMoviesByDirector(director) {
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            let foundMovies = GetTitles(director);
            if (foundMovies.length > 0) {
                resolve(foundMovies);
            }
            else {
                reject('No movies found for that director.');
            }
        }, 2000);
    });
    return p;
}
exports.getMoviesByDirector = getMoviesByDirector;
function logSearchResults(director) {
    return __awaiter(this, void 0, void 0, function* () {
        let foundMovies = yield getMoviesByDirector(director);
        console.log(foundMovies);
    });
}
exports.logSearchResults = logSearchResults;
function Purge(inventory) {
    // implement some fancy business logic
    // return the purged items
    return inventory.splice(3, inventory.length);
}
exports.Purge = Purge;
