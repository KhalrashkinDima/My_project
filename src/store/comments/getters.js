export default {
    GetCommentId: state => id =>  {
        console.log(state.comments.filter(comments => comments.id === id).length);
        return state.comments.filter(comments => comments.id === id).length;
    },
    GetPostComments: state => id =>  {
        console.log(state.comments.filter(comments => comments.id === id));
        return state.comments.filter(comments => comments.id === id);
    },
}