import gql from 'graphql-tag';

export const fetchMovies = gql`
      query fetchMovies {
        allMovies {
          id
          label
          rating
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
  mutation createMovie($id: ID!, $label: String!, $rating: Int!, $description: String!) {
      createMovie(id: $id, label: $label, rating: $rating, description: $description) {
          id
          label
          rating
          description
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
