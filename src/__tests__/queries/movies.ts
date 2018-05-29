import { print } from 'graphql/language/printer';
import {
  createMovie,
  fetchMovieDetails,
  fetchMovies,
  removeAllMovies,
  removeMovie,
  updateMovie
} from "../../queries/movies";

describe('Queries: Movies', () => {

  test('fetch movies query', () => {
    const result = print(fetchMovies);

    expect(result).toMatchSnapshot();
  });

  test('fetch movie details', () => {
    const result = print(fetchMovieDetails);

    expect(result).toMatchSnapshot();
  });

  test('create movie', () => {
    const result = print(createMovie);

    expect(result).toMatchSnapshot();
  });

  test('update movie', () => {
    const result = print(updateMovie);

    expect(result).toMatchSnapshot();
  });

  test('remove movie', () => {
    const result = print(removeMovie);

    expect(result).toMatchSnapshot();
  });

  test('remove all movies', () => {
    const result  = print(removeAllMovies(['0', '1', '2']));

    expect(result).toMatchSnapshot();
  })
});
