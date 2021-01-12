import * as db from './db';

const resolvers = {
    Query: {
        movies: () => { return db.movies },
        movie: (_, {id}) => { return db.getMovie(id)}
    },
    Mutation: {
        deleteMovie: (_, { id }) => { return db.deleteMovie(id) },
        addMovie: (_, { name, score }) => {
            db.addMovie(name, score)
            return db.movies;        } 
    }
}

export default resolvers;
