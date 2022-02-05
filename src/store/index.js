import { createStore } from 'vuex'

import posts from './posts'
import users from './users'
import comments from './comments'
export default createStore({
  modules: {
    posts,
    users,
    comments,
  },
})
