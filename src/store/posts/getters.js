import posts from ".";

export default {
    GetPosts: state => {
        const posts = state.posts
        posts.sort((a, b) => {
            return b.date - a.date;
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
    GetMyPosts: state => id => {
        return state.posts.filter(posts => posts.authorUid === id);
    },
    PostIsDead: state => id => {
        console.log(state.posts.filter(posts => posts.id === id));
        return state.posts.filter(posts => posts.id === id);
    },
    GetPostsByCategory: state => category => {
        return state.posts.filter(posts => posts.category === category);
    },
}