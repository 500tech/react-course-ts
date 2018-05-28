import gql from "graphql-tag";

const movieFragment = gql`
  fragment movie on Movie {
    id
    label
  }
`;

const fullMovieFragment = gql`
  ${movieFragment}
  fragment fullMovie on Movie {
      ...movie
      rating
      description
  }
`;

export const fetchMovies = gql`
    ${movieFragment}
    query fetchMovies {
        allMovies {
            ...movie
        }
    }
`;

export const fetchMovieDetails = gql`
  query fetchMovieDetails($id: ID!) {
      Movie(id: $id) {
          description
          rating
      }
  }
`;

export interface createMovieParams {
  id: String
  label: String
  rating: Number
  description: String
}

export const createMovie = gql`
  ${movieFragment}
  mutation createMovie($id: ID!, $label: String!, $rating: Int!, $description: String!) {
      createMovie(id: $id, label: $label, rating: $rating, description: $description) {
          ...movie
      }
  }
`;

export interface updateMovieParams {
  id: String
  label: String
  rating: Number
  description: String
}

export const updateMovie = gql`
  ${fullMovieFragment}
    mutation updateMovie($id: ID!, $label: String!, $rating: Int!, $description: String!) {
        updateMovie(id: $id, label: $label, rating: $rating, description: $description) {
            ...fullMovie
        }
    }
`;

export interface removeMovieParams {
  id: String
}

export const removeMovie = gql`
  mutation removeMovie($id: ID!) {
      removeMovie(id: $id)
  }
`;

export const removeAllMovies = (movieIds) => gql`
  mutation removeAllMovies {
      ${movieIds.map((id) => `movie${id}: removeMovie(id: "${id}")`).join('\n')}
  }
`;

