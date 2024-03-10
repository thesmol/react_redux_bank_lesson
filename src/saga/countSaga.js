import { put, takeEvery } from "redux-saga/effects";
import { incrementCreator, ASYNC_INCRIMENT, INCREMENT } from "../store/countReducer";
// put - диспетчер для асинхронных actions


const delay = (ms) => new Promise(res => setTimeout(res, ms));

// асинхронные action для работы с count
function* incrementWorker() {
    yield delay(1000)
    //не выполнится пока не выполнится предыдущая часть
    yield put(incrementCreator())
}

// для всех actions связанных со счетчиком создадим watcher
export function* countWatcher() {
    // (1. параметр за которым следим, 
    // 2. воркер отрабатывающий, когда action типа 1 будет задиспачен)
    yield takeEvery(ASYNC_INCRIMENT, incrementWorker)
}