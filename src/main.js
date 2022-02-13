import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import ModalProfile from "@/components/ModalProfile.vue";
import MyInput from "@/components/ui/MyInput.vue";
import GenderChoose from "@/components/ui/GenderChoose.vue";
import ChooseFromMany from "@/components/ui/ChooseFromMany.vue";
import axios from 'axios';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import moment from 'moment'

const firebaseConfig = {
    apiKey: "AIzaSyB9mSsn4FE8vaTl0w-5-kKAnJjOVBFFfLQ",
    authDomain: "dimakharlashkin.firebaseapp.com",
    projectId: "dimakharlashkin",
    storageBucket: "dimakharlashkin.appspot.com",
    messagingSenderId: "22662289719",
    appId: "1:22662289719:web:2cb7c99b589c6dde59e2b2",
    measurementId: "G-QH6ET1NN55",
    databaseURL: "https://dimakharlashkin-default-rtdb.asia-southeast1.firebasedatabase.app/",
  };
initializeApp(firebaseConfig);
getAnalytics(app);

const db = getDatabase();
const auth = getAuth();

onValue(ref(db, '/posts'), (snapshot) => {
  store.commit('posts/clear',);
  const postsObject = snapshot.val();
  for (const [key, value] of Object.entries(postsObject)) {
    store.commit('posts/addPost', value);
}
});

onValue(ref(db, '/comments'), (snapshot) => {
  store.commit('comments/clear',);
  const postsObject = snapshot.val();
  for (const [key, value] of Object.entries(postsObject)) {
    store.commit('comments/addComments', value);
}
});

onAuthStateChanged(auth, (users) => {
  if (users) {
    store.commit('users/setUser', users);
  } else {
    store.dispatch('users/logout');
  }
});





const app = createApp(App);
app.use(router);
app.use(store);
app.use(moment);
app.component('ModalProfile', ModalProfile)
app.component('MyInput', MyInput)
app.component('GenderChoose', GenderChoose)
app.component('ChooseFromMany', ChooseFromMany)

app.config.globalProperties.axios = axios

app.mount('#app');

