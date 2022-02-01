export default {
    GetPosts: state => {
        return state.posts;
    },
    GetPostById: state => id => {
        return state.posts.find(posts => posts.id === id);
    },
    GetId: state => {
        return state.posts.length + 1;
    },
}