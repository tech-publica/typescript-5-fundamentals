import { Movie, Logger, CastMember as Actor } from "./interfaces";
import { Performer, Documentary, Favorites } from "./classes";
import * as Utility from "./functions";

let inventory: Movie[] = Utility.GetAllMovies();

let favoriteMovies: Favorites<Movie> = new Favorites<Movie>();
inventory.forEach(movie => favoriteMovies.add(movie));

let firstFave: Movie = favoriteMovies.getFirst();

let docs: Array<Documentary> = [
  new Documentary('Baseball', 1994, 'History'),
  new Documentary('In Pursuit of Flavor', 2022, 'Wine'),
  new Documentary('Gumbo', 2018, 'Food'),
];

let favoriteDocs: Favorites<Documentary> = new Favorites<Documentary>();
docs.forEach(doc => favoriteDocs.add(doc));

let firstDoc: Documentary = favoriteDocs.getFirst();

favoriteDocs.printTitles();

let originalMovie = favoriteMovies.find('A New Hope');
console.log(`${originalMovie.title} - ${originalMovie.yearReleased}`);