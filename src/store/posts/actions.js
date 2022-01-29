import { ssrContextKey } from "vue"

export default {
    LoadPosts(context) {
        fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
            .then(response => response.json())
            .then( (json) => context.state.posts = json)
    },
    CreatePost(context, title, url, id) {
        fetch('https://jsonplaceholder.typicode.com/albums/', {
            method: 'POST',
            body: JSON.stringify(title, url, id),
            headers: {
                'Content-type' : 'application/json; charset=UTF-8',
            },
        })
            .then(response => response.json())
            .then( (json) => context.commit('AddPost', json));
    }
}

