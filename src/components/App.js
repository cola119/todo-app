import React from 'react';

import useTodoState from '../hooks/useTodoState';
import useFilterState from '../hooks/useFilterState';

import TodoForm from './Organisms/TodoForm';
import TodoList from './Organisms/TodoList';
import FilterArea from './Organisms/FilterArea';

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
        // low: "低い",
    }

    const formInitial = { title: '', priority: 'medium', deadline: 'today' };

    const { todos, addTodo, deleteTodo, changeTodoState, filterTodos } = useTodoState([]);

    const { filter: stateFilter, handleFilter: handleStateFileter } = useFilterState(stateLabels);
    const { filter: deadlineFilter, handleFilter: handleDeadlineFileter } = useFilterState(deadlineLabels);
    const { filter: priorityFilter, handleFilter: handlePriorityFileter } = useFilterState(priorityLabels);

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
                labels={[stateLabels, deadlineLabels, priorityLabels]}
                todoKeys={["state", "deadline", "priority"]}
                filters={[stateFilter, deadlineFilter, priorityFilter]}
                handleFileters={[handleStateFileter, handleDeadlineFileter, handlePriorityFileter]}
            />
            <TodoList
                todos={filterTodos([["state", stateFilter], ["deadline", deadlineFilter], ["priority", priorityFilter]])}
                deleteTodo={deleteTodo}
                changeTodoState={changeTodoState}
            />
        </div>
    );
};

export default App;
