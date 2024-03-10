const defaultState = {
    users: [],
}

const SET_USERS = "SET_USERS";
export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return { ...state, users: action.payload};
        }
        default: return state;
    }
}

export const setUsers = (payload) => ({type: SET_USERS, payload});

