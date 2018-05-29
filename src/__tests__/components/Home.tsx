import * as React from 'react';
import { shallow } from 'enzyme';
import Home from "../../components/Home";
import {executeQuery} from "../../utils/api";
import Movies from "../../components/Movies";
import Mock = jest.Mock;
import Panel from "../../components/Panel";

/*
  Here we mock the api module, so out tests do not go to our server.
  We generate a mock function with jest and instruct it to return a resolved promise
  with an empty data set by default.

  We will override this implementation in every relevant test
 */
jest.mock('../../utils/api', () => {
  return {
    executeQuery: jest.fn().mockResolvedValue({ data: { allMovies: [] }})
  }
});

/*
  When we test code that runs promises we don't have access to, we don't know how to tell jest when
  the promise was completed and jest can continue the test.
  In order to overcome this, we create a utility function that generates a new promise and resolves it
  on the next processing frame, also known as 'next tick'.

  What happens is that initially we had a call stack with a promise in it. By running a new promise that resolves
  after the next tick, we can know for sure that all previous promises were resolved and we can continue our test.
 */
const scheduler = typeof setImmediate === 'function' ? setImmediate : setTimeout;

function flushPromises() {
  return new Promise(function(resolve) {
    scheduler(resolve);
  });
}

const setup = ({ id = null } = {}) => ({
  match: {
    params: {
      id
    }
  }
});

/*
  A utility function that allows us to change the value of our api result.
  There are more functions like these below that help us return the correct response
  for each api type.
 */
function setupFetchMovies(includeExtraData: boolean) {
  const extraData = {
    description: 'dummy description', rating: 2
  };
  const payload: any = {
    data: {
      allMovies: [
        {id: 0, label: 'movie title'}
      ]
    }
  };

  if (includeExtraData) {
    payload.data.allMovies[0] = { ...payload.data.allMovies[0], ...extraData };
  }

  const executeQueryMock = executeQuery as Mock;
  executeQueryMock.mockResolvedValue(payload);

  return payload;
}

function setupMovieExtraDetailsFetch() {
  const payload = {
    data: {
      Movie: {
        description: 'dummy description',
        rating: 2
      }
    }
  };
  const executeQueryMock = executeQuery as Mock;
  executeQueryMock.mockResolvedValue(payload);

  return payload;
}

function setupCreateMovie() {
  const payload = {
    data: {
      createMovie: {
        id: '1',
        label: 'movie title',
        rating: 1,
        description: 'details about movie'
      }
    }
  };

  (executeQuery as Mock).mockResolvedValue(payload);

  return payload;
}

describe('<Home/>', () => {

  beforeEach(() => {
    (executeQuery as Mock).mockClear();
  });

  test('should render', () => {
    const props = setup();
    const component = shallow(
        <Home {...props} />
    );

    expect(component).toMatchSnapshot();
  });

  test('should fetch movies', async () => {
    const payload = setupFetchMovies(false);
    const props = setup();

    const component = shallow(
        <Home {...props} />
    );

    await flushPromises();
    component.update();

    expect(component.find(Movies)).toHaveProp('data', payload.data.allMovies);
  });

  test('should select a movie and fetch description and rating if missing', async () => {
    const props = setup();
    const payload = setupFetchMovies(false);

    const component = shallow(
        <Home {...props} />
    );

    // wait for all promises to be done before we continue with our test
    await flushPromises();
    const selectMovie = component.find(Movies).prop('selectMovie');

    // clear the mock calls until this point so we can assert the api spy easily without
    // having to check for specific calls.
    (executeQuery as Mock).mockClear();
    setupMovieExtraDetailsFetch();

    selectMovie(0);
    expect(executeQuery).toHaveBeenCalled();

    // after we cause something that updates the component we must call component.update to force
    // the component to render again.
    component.update();

    expect(component.find(Panel)).toHaveProp('movie', payload.data.allMovies[0]);
  });

  test('should select a movie and not fetch description and rating if available', async () => {
    const props = setup();
    const payload = setupFetchMovies(true);

    const component = shallow(
        <Home {...props} />
    );

    await flushPromises();
    const selectMovie = component.find(Movies).prop('selectMovie');

    (executeQuery as Mock).mockClear();
    selectMovie(0);
    expect(executeQuery).not.toHaveBeenCalled();

    component.update();

    expect(component.find(Panel)).toHaveProp('movie', payload.data.allMovies[0]);
  });

  test('should add a movie', async () => {
    const props = setup();
    setupFetchMovies(false);

    const component = shallow(
        <Home {...props} />
    );

    const payload: any = setupCreateMovie();

    const updateValue = component.find(Movies).prop('updateValue');
    const addMovie = component.find(Movies).prop('addMovie');

    updateValue({ target: { value: 'movie title'}});
    addMovie();

    await flushPromises();

    component.update();

    expect(component.find(Movies)).toHaveProp('data', expect.arrayContaining([payload.data.createMovie]));
  });

  test('should remove a movie', async () => {
    const props = setup();
    setupFetchMovies(false);

    const component = shallow(
        <Home {...props} />
    );

    await flushPromises();

    const removeMovie = component.find(Movies).prop('removeMovie');

    removeMovie(0);

    await flushPromises();

    component.update();

    expect(component.find(Movies)).toHaveProp('data', []);
  });

  test('should clear all movies', async () => {
    const props = setup();
    setupFetchMovies(false);

    const component = shallow(
        <Home {...props} />
    );

    await flushPromises();

    const clearAll = component.find(Movies).prop('clearAll');

    clearAll();

    await flushPromises();

    component.update();

    expect(component.find(Movies)).toHaveProp('data', []);
  });

  test('should clear the selected movie', async () => {
    const props = setup();
    const payload = setupFetchMovies(true);

    const component = shallow(
        <Home {...props} />
    );

    await flushPromises();

    const selectMovie = component.find(Movies).prop('selectMovie');
    const clearSelected = component.find(Panel).prop('clearSelected');

    (executeQuery as Mock).mockClear();
    selectMovie(0);

    component.update();

    expect(component.find(Panel)).toHaveProp('movie', payload.data.allMovies[0]);

    clearSelected();
    component.update();

    expect(component.find(Panel)).toHaveProp('movie', undefined);
  });
});
