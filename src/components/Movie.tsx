import * as React from 'react';

const Movie = ({ label, removeMovie }) => <li onClick={removeMovie}>{label}</li>;

export default Movie;
