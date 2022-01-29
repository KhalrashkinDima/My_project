import { createStore } from 'vuex'

import posts from './posts'
import users from './users'
import counter from './counter'

export default createStore({
  modules: {
    posts,
    users,
    counter,
  },
})
