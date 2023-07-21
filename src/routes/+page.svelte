<script>
    import { addTodo, deleteTodo, toggleTodoCompleted } from "../stores/todoStore";
    import { todos } from "../stores/todoStore";
    import Navbar from "../components/Navbar.svelte";

    let todo = "";

    function handleSubmit() {
        addTodo(todo);
        todo = "";
        console.log("submitting");
    }
</script>

<Navbar></Navbar>

<div class="container mx-auto my-6 max-w-lg">
    <div class="flex flex-col">
        <form on:submit|preventDefault={handleSubmit}>
            <div class="flex flex-col">
                <h1 class="mt-4 text-2xl text-white">Todo List</h1>
                <div class="flex flex-row mt-2">
                    <input type="text" name="todo" bind:value={todo} placeholder="Todo" class="p-2 w-9/12 rounded-md text-neutral-900" />
                    <button class="ml-2 p-2 w-3/12 bg-blue-500 hover:bg-blue-600 rounded-md shadow-sm">Create +</button>
                </div>
            </div>
        </form>
        <ul class="flex flex-col mt-4">
            {#each $todos as todo}
                <li class="flex bg-white text-neutral-900 items-center shadow-sm border border-gray-200 rounded-lg my-2 py-2 px-4">
                    <input name="completed" type="checkbox" checked={todo.completed} on:change={() => toggleTodoCompleted(todo.id)} class="mr-2 form-checkbox h-5 w-5" />
                    <span class={`flex-1 text-gray-800 ${todo.completed ? 'line-through' : null}`}>{todo.text}</span>
                    <button type="button" class="text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline" on:click={() => deleteTodo(todo.id)}>Delete</button>
                </li>
            {/each}
        </ul>
    </div>
</div>
