import { useState } from 'react';

const useTodoState = (init) => {
    const [todos, saveTodos] = useState(init);

    return {
        todos,
        addTodo: (todo) => {
            const newTodos = [...todos, { id: Date.now(), title: todo.title, priority: todo.priority, deadline: todo.deadline, state: 'incomplete' }];
            saveTodos(newTodos);
        },
        deleteTodo: (todoId) => {
            const newTodos = todos.filter(todo => todo.id !== todoId);
            saveTodos(newTodos);
        },
        changeTodoState: (todoId) => {
            const newTodos = todos.map(todo => todo.id === todoId ? { ...todo, state: todo.state === 'complete' ? 'incomplete' : 'complete' } : todo);
            saveTodos(newTodos);
        },
        // filters = [[key, filter], []]
        filterTodos: filters => todos.filter(todo =>
            filters.every(([key, filter]) =>
                filter[todo[key]]
            )).sort((a, b) => b.id - a.id)
    }
};

export default useTodoState;