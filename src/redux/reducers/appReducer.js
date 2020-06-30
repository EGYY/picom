import {ADD_CITY, DELETE_CITY} from "../types";

const initialState = {
    data: []
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CITY:
            return {...state, data: [...state.data, action.payload]};

        case DELETE_CITY:
            return {...state, data: action.payload};

        default:
            return state
    }
}

export default appReducer;