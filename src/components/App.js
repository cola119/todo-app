import React, { useState } from 'react';

import useTodoState from './useTodoState';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

const App = () => {

    const { todos, addTodo, deleteTodo, changeTodoState } = useTodoState([]);

    return (
        <>
            <TodoForm
                onSubmit={addTodo}
                label="aaa"
                placeholder="aaa"
            />
            <TodoList
                todos={todos}
                deleteTodo={deleteTodo}
                changeTodoState={changeTodoState}
            />
        </>
    );
};

export default App;
