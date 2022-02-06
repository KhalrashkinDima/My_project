export default {
    GetCommentId(state) {
        return state.comments.length + 3;
    },
    GetPostComments: state => id =>  {
        return state.comments.filter(comments => comments.postId === id);
    },
    GetMyComments: state => authorName =>  {
        return state.comments.filter(comments => comments.authorName === authorName);
    },
}  