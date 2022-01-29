export default {
      AddPost: (state, post) => {
        state.posts.push(post);
        console.log(state.posts);
      },
  }