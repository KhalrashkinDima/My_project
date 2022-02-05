export default {
    addComments(state, comments) {
      state.comments.push(comments);
    },
    clear(state) {
      state.comments = [];
    },
  }
  
  
  