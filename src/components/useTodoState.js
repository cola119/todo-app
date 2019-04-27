import { useState } from 'react';

const useTodoState = (init) => {
    const [todos, saveTodo] = useState(init);

    return {
        todos,
        addTodo: (todo) => {
            const newTodos = [...todos, { id: Date.now(), title: todo, isDone: false }];
            saveTodo(newTodos);
        },
        deleteTodo: (todoId) => {
            const newTodos = todos.filter(todo => todo.id !== todoId);
            saveTodo(newTodos);
        },
        changeTodoState: (todoId) => {
            const newTodos = todos.map(todo => todo.id === todoId ? { ...todo, isDone: !todo.isDone } : todo);
            saveTodo(newTodos);
        },
    }
};

export default useTodoState;