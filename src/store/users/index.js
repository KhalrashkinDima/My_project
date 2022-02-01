import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";

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
      if( state.uid == '3aGiZCpDe5PiBWtdGoG8lF6uRYt1') {
        return true;
      };
    },
  },
  mutations: {
  },
  actions: {
    login(ctx, data) {
      const auth = getAuth();
      return signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          ctx.state.uid = userCredential.user.uid;  
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
          return 'ok';
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.error(errorMessage);
        });
    },
    logout(ctx) {
      ctx.state.email = '';
      ctx.state.uid = '';
    },
  },
}