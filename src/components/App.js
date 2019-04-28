import React from 'react';

import useTodoState from '../hooks/useTodoState';
import useFilterState from '../hooks/useFilterState';

import TodoForm from './TodoForm';
import TodoList from './TodoList';
import FilterForm from './FilterForm';

// {key1: label2, key2: label2} => {key1: true, key2: true}
const setDefaultFilter = (labels) => Object.fromEntries(Object.entries(labels).map(([key, val]) => [key, true]));

const App = () => {

    const stateLabels = {
        incomplete: "未完了",
        complete: "完了済み",
    }
    const deadlineLabels = {
        today: "今日中",
        tomorrow: "明日中",
        week: "一週間",
        other: "未定",
    }

    const { todos, addTodo, deleteTodo, changeTodoState, filterTodos } = useTodoState([]);

    const { filter: stateFilter, handleFilter: handleStateFileter } = useFilterState(setDefaultFilter(stateLabels));

    const { filter: deadlineFilter, handleFilter: handleDeadlineFileter } = useFilterState(setDefaultFilter(deadlineLabels));

    return (
        <div>
            <TodoForm
                onSubmit={addTodo}
                label="タスクを記入してください"
                placeholder="（例）Wantedlyフロントエンド課題"
                deadlineLabels={deadlineLabels}
            />
            <FilterForm
                todos={todos}
                labels={stateLabels}
                labelKey="state"
                filter={stateFilter}
                handleFileter={handleStateFileter}
            />
            <br />
            <FilterForm
                todos={todos}
                labels={deadlineLabels}
                labelKey="deadline"
                filter={deadlineFilter}
                handleFileter={handleDeadlineFileter}
            />
            <TodoList
                todos={filterTodos([["state", stateFilter], ["deadline", deadlineFilter]])}
                deleteTodo={deleteTodo}
                changeTodoState={changeTodoState}
            />
        </div>
    );
};

export default App;
