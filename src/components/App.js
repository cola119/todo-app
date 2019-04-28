import React from 'react';
// import React, { useState } from 'react';

import useTodoState from '../hooks/useTodoState';
import useFilterState from '../hooks/useFilterState';

import TodoForm from './TodoForm';
import TodoList from './TodoList';
import FilterForm from './FilterForm';

import Grid from '@material-ui/core/Grid';

const App = () => {

    const { todos, addTodo, deleteTodo, changeTodoState } = useTodoState([]);
    const { filter, handleFileter } = useFilterState({ incomplete: true, complete: true });

    return (
        <div >
            <TodoForm
                onSubmit={addTodo}
                label="タスクを記入してください"
                placeholder="（例）Wantedlyフロントエンド課題"
            />
            <FilterForm
                filter={filter}
                handleFileter={handleFileter}
            />
            <TodoList
                todos={todos.sort((a, b) => b.id - a.id).filter(todo => filter[todo.state])}
                deleteTodo={deleteTodo}
                changeTodoState={changeTodoState}
            />
        </div>
    );
};

export default App;
