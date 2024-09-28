class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating ? rating : "PG";
        }

    // Method filter movies with (PG) rating
    static getPG(movies) {
        let pgMovies = [];
        for (let i = 0; i < movies.length; i++) {
            if (movies[i].rating === "PG") {
                pgMovies.push(movies[i]);
            }
        }
        return pgMovies;
    }
}

//Create the Movie class using conditional statement

const KGF = new Movie("KGF", "Yash", "PG-13");

// Example usage of getPG method
const movie1 = new Movie("JEO", "Rio", "G");
const movie2 = new Movie("DADA", "Kavin", "PG-13");
const movie3 = new Movie("Hi Nanna", "Nani", "PG");
const movie4 = new Movie("Leo", "Vijay", "PG");

const allMovies = [KGF, movie1, movie2, movie3, movie4];
const pgMovies = Movie.getPG(allMovies);

console.log(pgMovies);
// here it will print out movies with "PG" rating

