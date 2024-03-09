// присваивается в тот момент, когда пользователь открыл приложение
const defaultState = {
    cash: 0,
}

/**
 * функция принимающая состояние и action, всегда возвращает новый объект состояние
 * @date 3/9/2024 - 11:04:53 PM
 *
 * @param {{ cash: number; }} [state=defaultState]
 * @param {*} action
 * @returns {{ state: obj; }}
 */
export const cashReducer = (state = defaultState, action) => {
    switch (action.type) {
        // определяем как action будет изменять состояние
        case "ADD_CASH": {
            return { ...state, cash: state.cash + action.payload };
        }

        case "GET_CASH": {
            return { ...state, cash: state.cash - action.payload };
        }
        default: return state;
    }
}
