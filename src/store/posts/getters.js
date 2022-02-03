export default {
    GetPosts: state => {
        const posts = state.posts
        posts.sort((a, b) => {
            return a.date - b.date;
        });
        return posts;
    },
    GetPostById: state => id => {
        return state.posts.find(posts => posts.id === id);
    },
    GetBest: state => {
        const BestPosts = state.posts
        BestPosts.sort((x, y) => {
            return y.count - x.count;
        });
        return BestPosts;
    },
}