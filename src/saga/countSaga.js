import { put, takeEvery } from "redux-saga/effects";
import { incrementCreator, decrementCreator, ASYNC_INCREMENT, ASYNC_DECREMENT } from "../store/countReducer";
// put - диспетчер для асинхронных actions


const delay = (ms) => new Promise(res => setTimeout(res, ms));

// асинхронные action для работы с count
function* incrementWorker() {
    yield delay(1000);
    //не выполнится пока не выполнится предыдущая часть
    yield put(incrementCreator());
}

function* decrementWorker() {
    yield delay(1000);
    yield put(decrementCreator());
}

// для всех actions связанных со счетчиком создадим watcher
export function* countWatcher() {
    // (1. параметр за которым следим, 
    // 2. воркер отрабатывающий, когда action типа 1 будет задиспачен)
    yield takeEvery(ASYNC_INCREMENT, incrementWorker)

    yield takeEvery(ASYNC_DECREMENT, decrementWorker)
}