import {GET_NEWS_SUCCESS, GET_NEWS_FAILURE} from '../types/newsTypes'
import { GET_NEWS_REQUEST } from './../types/newsTypes';

const initialState = {
    loading: false,
    news: [],
    error: ''
  };
  
  const newsReducer = (state = initialState, action) => {
    switch (action.type) {

      case GET_NEWS_REQUEST: {
        return{
          ...state, loading: true
        }
      }
      
      case GET_NEWS_SUCCESS: {
        return{
          ...state, loading: false, news: action.payload, error:''
        }
      }

      case GET_NEWS_FAILURE: {
        return{
          ...state, loading: false, news:[] , error:action.payload
        }
      }

      default:
        return state;
    }
  };
  
  export default newsReducer;