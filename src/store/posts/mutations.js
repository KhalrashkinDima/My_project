export default {
  addPost(state, post) {
    state.posts.push(post);
  },
  PostDelete(state, index) {
    state.posts.splice(index, 1);
  },
  ChangePost(state, id, NewObject) {
    state.posts.splice(id, 1, NewObject);
  },
  clear(state) {
    state.posts = [];
  },
}


