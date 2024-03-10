const defaultState = {
    customers: [],
}

// снесенные в переменные actions
const ADD_CUSTOMER = "ADD_CUSTOMER";
const REMOVE_CUSTOMER = "REMOVE_CUSTOMER";
const ADD_MANY_CUSTOMER = "ADD_MANY_CUSTOMER";

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
        case ADD_MANY_CUSTOMER: {
            return {...state, customers: [...state.customers, ...action.payload]}
        }

        case ADD_CUSTOMER: {
            return { ...state, customers: [...state.customers, action.payload] };
        }

        case REMOVE_CUSTOMER: {
            return { ...state, customers: state.customers.filter(customer => customer.id !== action.payload)};
        }
        default: return state;
    }
}

// функция action creator возвращающая объект action
export const addManyCustomersAction = (payload) => ({type: ADD_MANY_CUSTOMER, payload});
export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload});
export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMER, payload});
