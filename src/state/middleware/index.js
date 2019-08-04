import logger from 'redux-logger';

export default [process.env.NODE_ENV === 'development' && logger].filter(Boolean);
