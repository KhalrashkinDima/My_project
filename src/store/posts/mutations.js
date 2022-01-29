export default {
      AddPost: (state, post) => {
        state.posts.push(post);
        console.log(state.posts);
      },
      PostDelete: (state, ID) => {
          state.posts.splice(ID, 1);
      },
  }