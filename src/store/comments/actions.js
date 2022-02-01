export default {
    LoadComments(context) {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then((json) => context.state.comments = context.state.comments.concat(json))
    },
}