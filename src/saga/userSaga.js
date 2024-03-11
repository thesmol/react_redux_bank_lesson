import { put, takeEvery, call } from "redux-saga/effects";
import { setUsers, FETCH_USERS } from "../store/userReducer";
// call - возвращает данные полученные в promise

export const fetchUsersFromApi = () => fetch('https://jsonplaceholder.typicode.com/users?_limit=10')

function* fetchUserWorker() {
    const data = yield call(fetchUsersFromApi);
    // массив пользователей с сервера
    const json = yield call(() => new Promise(res => res(data.json())));
    yield put(setUsers(json));
}

export function* userWatcher() {
    yield takeEvery(FETCH_USERS, fetchUserWorker)
}