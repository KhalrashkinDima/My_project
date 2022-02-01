export default {
  AddPost(state, post) {
    state.posts.push(post);
    console.log(state.posts);
  },
  PostDelete(state, index) {
    state.posts.splice(index, 1);
  },
}