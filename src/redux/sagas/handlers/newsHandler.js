import { call, put } from "redux-saga/effects";
import { getNewsSuccess, getNewsFailure } from "../../actions/newsActions";
import { requestGetNews } from "../requests/newsRequest";

export function* handleGetNews(action) {
  try {
    const response = yield call(requestGetNews);
    const data = response.data;
    yield put(getNewsSuccess(data));
  } catch (error) {
    yield put(getNewsFailure(error));
  }
}
