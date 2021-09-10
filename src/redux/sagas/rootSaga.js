import { takeLatest } from "redux-saga/effects";
import { handleGetNews } from "./handlers/newsHandler";
import {GET_NEWS_REQUEST} from '../types/newsTypes'

export function* watcherSaga() {
  yield takeLatest(GET_NEWS_REQUEST, handleGetNews);
}
