const defaultState = {
    customers: [],
}

/**
 * функция принимающая состояние и action, всегда возвращает новый объект состояние
 * @date 3/9/2024 - 11:04:53 PM
 *
 * @param {{ cash: number; }} [state=defaultState]
 * @param {*} action
 * @returns {{ state: obj; }}
 */
export const castomerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_CUSTOMER": {
            return { ...state, customers: [...state.customers, action.payload] };
        }

        case "GET_CASTOMERS": {
            return { ...state, cash: state.cash - action.payload };
        }
        default: return state;
    }
}