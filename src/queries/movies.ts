import gql from 'graphql-tag';

export const fetchMovies = gql`
      query fetchMovies {
        allMovies {
          id
          label
        }
        allActors {
            id
            label
        }  
      }
    `;
