import posts from ".";

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
    GetMyPosts(state, uid) {
        return state.posts.find(posts => posts.authorUid === uid);
    },
    IsLiked: state => id => {
        return state.posts.find(likes => posts.likes === id); 
    },
}