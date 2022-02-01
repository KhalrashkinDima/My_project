import { ssrContextKey } from "vue"

export default {
    LoadPosts(context, data) {
        if (!context.state.initLoad || data.force) {
            context.state.initLoad = true;
            fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
                .then(response => response.json())
                .then((json) => context.state.posts = context.state.posts.concat(json))
        }
    },
    CreatePost(context, title, url, id) {
        fetch('https://jsonplaceholder.typicode.com/albums/', {
            method: 'POST',
            body: JSON.stringify(title, url, id),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => response.json())
            .then((json) => context.commit('AddPost', json));
    }
}

