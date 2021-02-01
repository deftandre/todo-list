"use strict";

import { expect } from "chai";
import deepfreeze from "deep-freeze";
import todos, { initialState } from "./index.js";
import { ADD_TODO, TOGGLE_TODO } from "./actions";

test("should todos to be a function", () => {
    expect(todos).to.be.a("function");
});

test("should add a todo item", () => {
    const before = deepfreeze([]);
    const action = deepfreeze({
        type: ADD_TODO,
        payload: { id: 0, text: "Hey" },
    });
    const after = [
        {
            id: 0,
            text: "Hey",
            completed: false,
        },
    ];

    expect(todos(before, action)).to.be.deep.equal(after);
});

test("should add a new todo item", () => {
    const before = deepfreeze([
        {
            id: 0,
            text: "Hey",
            completed: false,
        },
    ]);
    const action = deepfreeze({
        type: ADD_TODO,
        payload: { id: 1, text: "Ho" },
    });
    const after = [
        {
            id: 0,
            text: "Hey",
            completed: false,
        },
        {
            id: 1,
            text: "Ho",
            completed: false,
        },
    ];

    expect(todos(before, action)).to.be.deep.equal(after);
});

test("should toggle first todo", () => {
    const before = deepfreeze([
        {
            id: 0,
            text: "Hey",
            completed: false,
        },
        {
            id: 1,
            text: "Ho",
            completed: false,
        },
    ]);
    const action = deepfreeze({
        type: TOGGLE_TODO,
        payload: { id: 0 },
    });
    const after = [
        {
            id: 0,
            text: "Hey",
            completed: true,
        },
        {
            id: 1,
            text: "Ho",
            completed: false,
        },
    ];

    expect(todos(before, action)).to.be.deep.equal(after);
});

test("should toggle second todo", () => {
    const before = deepfreeze([
        {
            id: 0,
            text: "Hey",
            completed: false,
        },
        {
            id: 1,
            text: "Ho",
            completed: false,
        },
    ]);
    const action = deepfreeze({
        type: TOGGLE_TODO,
        payload: { id: 1 },
    });
    const after = [
        {
            id: 0,
            text: "Hey",
            completed: false,
        },
        {
            id: 1,
            text: "Ho",
            completed: true,
        },
    ];

    expect(todos(before, action)).to.be.deep.equal(after);
});

test("should return the latest state when action is unknown", () => {
    const before = deepfreeze([
        {
            id: 0,
            text: "Hey",
            completed: false,
        },
    ]);
    const action = deepfreeze({
        type: "ANYTHING",
    });
    const after = [
        {
            id: 0,
            text: "Hey",
            completed: false,
        },
    ];

    expect(todos(before, action)).to.be.deep.equal(after);
});

test("should return initialState when state before is undefined", () => {
    const before = undefined;
    const action = deepfreeze({});
    const after = initialState;

    expect(todos(before, action)).to.be.deep.equal(after);
});
