export default {
    GetCommById: state => id => {
        return state.comments.filter((item) => item.id === id);
    },
}