"use strict";

import { ADD_TODO, TOGGLE_TODO } from "./actions";
import createReducer from "../create-reducer";

export const initialState = [];

const todos = createReducer(initialState, {
    [ADD_TODO]: (state, action) =>
        state.concat({
            id: action.payload.id,
            text: action.payload.text,
            completed: false,
        }),

    [TOGGLE_TODO]: (state, action) =>
        state.map((todo) =>
            todo.id !== action.payload.id
                ? todo
                : { ...todo, completed: !todo.completed }
        ),
});

export default todos;
