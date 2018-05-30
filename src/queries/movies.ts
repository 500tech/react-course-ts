import gql from 'graphql-tag';

const movieFragment = gql`
  fragment MovieDetails on Movie {
      __typename
      id
      label
      description
      rating
  }
`;

export const fetchMovies = gql`
  ${movieFragment}
      query fetchMovies {
        allMovies {
          ...MovieDetails
        }
        allActors {
            id
            label
        }  
      }
    `;

export const removeMovie = gql`
    mutation removeMovie($id: ID!) {
        removeMovie(id: $id)
    }
`;

export const createMovie = gql`
${ movieFragment }
    mutation createMovie($id: ID!, $label: String!, $rating: Int!, $description: String!) {
      createMovie(id: $id, label: $label, rating: $rating, description: $description) {
          ...Movie
      }
  }
`;

export const updateMovie = gql`
    mutation updateMovie($id: ID!, $label: String!, $rating: Int!, $description: String!) {
        updateMovie(id: $id, label: $label, rating: $rating, description: $description) {
            id
            label
            rating
            description
        }
    }
`;

export const removeAllMovies = (moviesIds) => gql`
  mutation removeAllMovies {
      ${ moviesIds.map(movieId => `Movie${movieId}: removeMovie(id: "${movieId}")`)}
  }
`;
