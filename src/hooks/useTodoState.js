import { useState } from 'react';

const uid = () => Date.now().toString(16) + (Math.floor(10000) * Math.random()).toString(16);

const useTodoState = (init) => {
    const [todos, saveTodos] = useState(init);

    return {
        todos,
        addTodo: (todo) => {
            const newTodos = [{ id: uid(), title: todo.title, priority: todo.priority, deadline: todo.deadline, state: 'incomplete', created_at: Date.now() }, ...todos];
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
        filterTodos: filters => todos.filter(todo => filters.every(([key, filter]) => filter[todo[key]]))
    }
};

export default useTodoState;