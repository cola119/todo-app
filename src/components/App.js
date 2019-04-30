import React from 'react';

import useTodoState from '../hooks/useTodoState';
import useFilterState from '../hooks/useFilterState';

import TodoForm from './TodoForm';
import TodoList from './TodoList';
import FilterArea from './FilterArea';

// {key1: label2, key2: label2} => {key1: true, key2: true}
const setDefaultFilter = (labels) => Object.fromEntries(Object.entries(labels).map(([key, val]) => [key, true]));

// filter: {[filterKey]: bool}
const App = () => {

    const stateLabels = {
        incomplete: "未完了",
        complete: "完了済み",
    }
    const deadlineLabels = {
        today: "今日中",
        tomorrow: "明日まで",
        week: "一週間",
        other: "未定",
    }
    const priorityLabels = {
        high: "高い",
        medium: "普通",
        low: "低い",
    }

    const formInitial = { title: '', priority: 'medium', deadline: 'today' };

    const { todos, addTodo, deleteTodo, changeTodoState, filterTodos } = useTodoState([]);
    const { filter: stateFilter, handleFilter: handleStateFileter } = useFilterState(setDefaultFilter(stateLabels));
    const { filter: deadlineFilter, handleFilter: handleDeadlineFileter } = useFilterState(setDefaultFilter(deadlineLabels));

    return (
        <div>
            <TodoForm
                onSubmit={addTodo}
                label="タスクを記入してください"
                placeholder="（例）Wantedlyフロントエンド課題"
                formInitial={formInitial}
                deadlineLabels={deadlineLabels}
                priorityLabels={priorityLabels}
            />
            <FilterArea
                todos={todos}
                labels={[stateLabels, deadlineLabels]}
                todoKeys={["state", "deadline"]}
                filters={[stateFilter, deadlineFilter]}
                handleFileters={[handleStateFileter, handleDeadlineFileter]}
            />
            <TodoList
                todos={filterTodos([["state", stateFilter], ["deadline", deadlineFilter]]).sort((a, b) => b.created_at - a.created_at)}
                deleteTodo={deleteTodo}
                changeTodoState={changeTodoState}
            />
        </div>
    );
};

export default App;
