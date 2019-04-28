import { act } from 'react-dom/test-utils';
import testHook from '../testUtils/testHook';
import useTodoState from '../hooks/useTodoState';

let todoState;
const initial = [];
beforeEach(() => {
    testHook(() => {
        todoState = useTodoState(initial);
    });
});

const testTodo = { title: "foo", priority: "medium", deadline: "todo" }

describe('useTextField', () => {
    test('should have functions', () => {
        expect(todoState.addTodo).toBeInstanceOf(Function);
        expect(todoState.deleteTodo).toBeInstanceOf(Function);
        expect(todoState.changeTodoState).toBeInstanceOf(Function);
        expect(todoState.filterTodos).toBeInstanceOf(Function);
    });

    test('should have correct initial state', () => {
        expect(todoState.todos).toEqual(initial);
    });

    test('test addTodo', () => {
        const n = 5;
        [...Array(n)].map(() => act(() => todoState.addTodo(testTodo)));
        expect(todoState.todos.length).toBe(n);
    });

    test('test deleteTodo', () => {
        const n = 5;
        [...Array(n)].map(() => act(() => todoState.addTodo(testTodo)));
        const someId = todoState.todos[1].id;
        act(() => todoState.deleteTodo(someId));
        expect(todoState.todos.length).toBe(n - 1);
    });

    test('test changeTodoState', () => {
        act(() => todoState.addTodo(testTodo));
        expect(todoState.todos[0].state).toBe("incomplete");
        const id = todoState.todos[0].id;
        act(() => todoState.changeTodoState(id));
        expect(todoState.todos[0].state).toBe("complete");
    });

    test('test filterTodos', () => {
        const todos = [
            { title: "title1", priority: "high", deadline: "today" },
            { title: "title2", priority: "medium", deadline: "tomorrow" },
            { title: "title3", priority: "medium", deadline: "week" },
            { title: "title4", priority: "low", deadline: "other" },
        ];
        todos.map(todo => act(() => todoState.addTodo(todo)));
        const filters = [
            ["priority", { high: true, medium: true, low: true }],
            ["deadline", { today: true, tomorrow: true, week: true, other: true }],
            ["state", { incomplete: true, complete: true }],
        ];
        expect(todoState.filterTodos(filters)).toEqual(todoState.todos);
        // high除外
        filters[0][1]["high"] = false;
        expect(todoState.filterTodos(filters).length).toBe(3);
        todoState.filterTodos(filters).map(todo => expect(todo.priority).not.toBe("high"));
        // tomorrow除外
        filters[1][1]["tomorrow"] = false;
        expect(todoState.filterTodos(filters).length).toBe(2);
        todoState.filterTodos(filters).map(todo => expect(todo.deadline).not.toBe("tomorrow"));
        //incomplete除外
        filters[2][1]["incomplete"] = false;
        act(() => todoState.changeTodoState(todoState.todos[2].id));
        expect(todoState.filterTodos(filters).length).toBe(1);
        todoState.filterTodos(filters).map(todo => expect(todo.state).not.toBe("incomplete"));
    });

});