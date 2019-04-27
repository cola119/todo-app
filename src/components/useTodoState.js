import { useState } from 'react';

const useTodoState = (init) => {
    const [todos, saveTodo] = useState(init);

    return {
        todos,
        addTodo: (todo) => {
            const newTodos = [...todos, { id: Date.now(), title: todo, state: 'incomplete' }];
            saveTodo(newTodos);
        },
        deleteTodo: (todoId) => {
            const newTodos = todos.filter(todo => todo.id !== todoId);
            saveTodo(newTodos);
        },
        changeTodoState: (todoId) => {
            const newTodos = todos.map(todo => todo.id === todoId ? { ...todo, state: todo.state === 'complete' ? 'incomplete' : 'complete' } : todo);
            saveTodo(newTodos);
        },
    }
};

export default useTodoState;