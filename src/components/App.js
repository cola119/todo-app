import React, { useState } from 'react';

import useTodoState from './useTodoState';
import useFilterState from './useFilterState';

import TodoForm from './TodoForm';
import TodoList from './TodoList';
import FilterForm from './FilterForm';



const App = () => {

    const { todos, addTodo, deleteTodo, changeTodoState } = useTodoState([]);
    const { filter, handleFileter } = useFilterState({ incomplete: true, complete: true });


    return (
        <>
            <TodoForm
                onSubmit={addTodo}
                label="aaa"
                placeholder="aaa"
            />
            <FilterForm
                filter={filter}
                handleFileter={handleFileter}
            />
            <TodoList
                todos={todos.filter(todo => filter[todo.state])}
                deleteTodo={deleteTodo}
                changeTodoState={changeTodoState}
            />
        </>
    );
};

export default App;
