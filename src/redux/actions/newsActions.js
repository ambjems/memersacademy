import {GET_NEWS_REQUEST, GET_NEWS_SUCCESS, GET_NEWS_FAILURE} from '../types/newsTypes'


export const getNewsRequest = () => ({
  type: GET_NEWS_REQUEST
});

export const getNewsSuccess = (news) => ({
  type: GET_NEWS_SUCCESS,
  payload:news
});

export const getNewsFailure = (error) => ({
  type: GET_NEWS_FAILURE,
  payload:error
});


