export default {
    GetCommentId(state) {
        console.log(state.comments);
        return state.comments.length + 1;
    },
    GetPostComments: state => id =>  {
        return state.comments.filter(comments => comments.postId === id);
    },
}  