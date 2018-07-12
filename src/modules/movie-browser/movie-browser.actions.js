import { creatAsyncActionCreator } from '../common/redux.helpers';
import * as movieService from './movie-browser.services';

export const keys = {
  'GET_TOP_MOVIES': 'GET_TOP_MOVIES',
  'SEARCH_MOVIES': 'SEARCH_MOVIES',
  'GET_MOVIE_DETAILS': 'GET_MOVIE_DETAILS'
}

export const getTopMovies = (page) => creatAsyncActionCreator(keys.GET_TOP_MOVIES, movieService.getTopMovies, {page});

export const searchMovies = (page) => creatAsyncActionCreator(keys.SEARCH_MOVIES, movieService.searchMovies, {page, query});

export const getMovieDetails = (movieId) => creatAsyncActionCreator(keys.GET_MOVIE_DETAILS, movieService.getMovieDetails, {movieId});
