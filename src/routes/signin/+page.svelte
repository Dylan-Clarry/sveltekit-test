<script>
    // Sign-in page will be seperate from Sign-up for now, in the future I would like to have one form that can toggle between the two...
</script>

<main class="flex h-screen justify-center items-center">
    <form class="shadow-md rounded-md w-1/4 p-8 bg-neutral-800" method="POST">
        <h2 class="text-center text-2xl text-neutral-100">Sign In</h2>
        <div class="my-1">
            <label for="username" class="mb-0.5 block text-neutral-100">Username</label>
            <input type="text" id="username" name="username" placeholder="Username" class="p-1 w-full border border-neutral-800 rounded-md text-neutral-800">
        </div>
        <div class="my-1">
            <label for="email" class="mb-0.5 block text-neutral-100">Email</label>
            <input type="text" id="email" name="email" placeholder="Email" class="p-1 w-full border border-neutral-800 rounded-md text-neutral-800">
        </div>
        <div class="my-1">
            <label for="password" class="mb-0.5 block text-neutral-100">Password</label>
            <input type="text" id="password" name="password" placeholder="Password" class="p-1 w-full border border-neutral-800 rounded-md text-neutral-800">
        </div>
        <div class="flex justify-center w-full mt-4">
            <button type="submit" class="py-1 w-full rounded-md bg-green-500 hover:bg-green-600 text-neutral-100">Sign In</button>
        </div>
    </form>
</main>
