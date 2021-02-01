"use strict";

import React from "react";
import Form from "components/form";
import TodoList from "components/todos-list";
import Filter from "components/filter";

const App = () => (
    <div>
        <Form />
        <TodoList />
        <Filter />
    </div>
);

export default App;
