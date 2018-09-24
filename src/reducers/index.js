import { combineReducers } from 'redux';

import setMovies from './setMovies';
import setHasMore from './setHasMore';
import setPage from './setPage';
import setSearchQuery from './setSearchQuery';

export default combineReducers({
  setMovies,
  setHasMore,
  setPage,
  setSearchQuery,
});
