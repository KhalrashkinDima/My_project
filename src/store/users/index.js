import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export default {
  namespaced: true,
  state() {
    return {
      email: '',
      uid: '',
    };
  },
  getters: {
    isAuth(state) {
      if (state.uid !== '') {
        return true;
      };
    },
    isAdmin(state) {
      if (state.uid == '3aGiZCpDe5PiBWtdGoG8lF6uRYt1') {
        return true;
      };
    },
    ReturnName(state) {
        return state.name;
    },
    ReturnUid(state) {
      return state.uid;
    },
    AuthorName(state, uid) {
      const author = state.users.find(users => users.uid === uid);
      return author.name;
    }
  },
  mutations: {
    setUser(state, data) {
      state.name = data.email;
      state.uid = data.uid;
    },
  },
  actions: {
    login(ctx, data) {
      const auth = getAuth();
      return signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          ctx.state.uid = userCredential.user.uid;
          ctx.state.email = userCredential.user.email;
          return 'ok';
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.error(errorMessage);
        });
    },
    sign(ctx, data) {
      const auth = getAuth();
      return createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          ctx.state.uid = userCredential.user.uid;
          ctx.state.email = userCredential.user.email;
          return 'ok';
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.error(errorMessage);
        });
    },
    logout(ctx) {
      const auth = getAuth();
      signOut(auth).then(() => {
        ctx.state.uid = '';
        ctx.state.name = '';
      });
    },
  },
}