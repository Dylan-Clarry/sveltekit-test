import type { Actions } from "@sveltejs/kit";
import type { Actions } from "./$types";
import type { PageData } from "./$types";

export async function load({ params }) {
    return {
        post: getPost(),
    }
}

function getPost() {
    return {
        id: 0,
        title: "Post Title",
        Content: "Post Content",
    }
}
