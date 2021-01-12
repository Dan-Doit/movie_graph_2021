export let movies = [
  {
    id: 0,
    name: "Star Wars - The new one",
    score: 1
  },
  {
    id: 1,
    name: "Avengers - The new one",
    score: 8
  },
  {
    id: 2,
    name: "The Godfather I",
    score: 99
  },
  {
    id: 3,
    name: "Logan",
    score: 2
  }
];


export const getMovie = (id) => {
    const getId = movies.filter(movie => { return movie.id === id });
    return getId[0];
}; 

export const deleteMovie = (id) => { 
    const newMovies = movies.filter(movie => { return movie.id !== id });
    if (movies.length > newMovies.length) {
        movies = newMovies;
    } else { 
        return newMovies
    }
    return newMovies;
}

class mo{ 
    constructor(name,score) { 
            this.id = movies.length + 1,
            this.name = name,
            this.score = score
    }
}

export const addMovie = (name, score) => {
    const newMovie = new mo(name, score)

    movies.push(newMovie);
    return movies;
}



