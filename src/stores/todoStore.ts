import { writable } from "svelte/store";

interface Todo {
    text: string,
    completed: boolean,
    id: number
}

export const todos = writable<Todo[]>([]);

export function addTodo(text: string) {
    todos.update((curr: Todo[]) => {
        return [...curr, {text, completed: false, id: Date.now()}];
    });
}

export function deleteTodo(id: number) {
    todos.update(todos => todos.filter(todo => todo.id !== id));
}

export function toggleTodoCompleted(id: number) {
    todos.update(todos => {
        for(let i = 0; i < todos.length; i++) {
            const currTodo = todos[i];
            if(currTodo.id === id) {
                currTodo.completed = !currTodo.completed;
                break;
            }
        }
        return todos;
    });
}
