<script>
    import { addTodo } from "../stores/todoStore";
    import { todos } from "../stores/todoStore";

    let todo = "";

    function handleSubmit() {
        addTodo(todo);
        todo = "";
        console.log("submitting");
    }
</script>

<div>
    <form on:submit|preventDefault={handleSubmit} class="flex justify-center text-white">
        <div class="flex flex-col">
            <h1 class="mt-4 text-2xl">Todo List</h1>
            <div class="flex flex-row mt-2">
                <input type="text" name="todo" bind:value={todo} placeholder="Todo" class="p-2 rounded-md text-neutral-900" />
                <button class="ml-2 p-2 bg-blue-500 hover:bg-blue-600 rounded-md shadow-sm">Create +</button>
            </div>
        </div>
    </form>
</div>
