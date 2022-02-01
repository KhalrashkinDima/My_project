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
import SuperCounter from "@/components/ui/SuperCounter.vue";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyB9mSsn4FE8vaTl0w-5-kKAnJjOVBFFfLQ",
    authDomain: "dimakharlashkin.firebaseapp.com",
    projectId: "dimakharlashkin",
    storageBucket: "dimakharlashkin.appspot.com",
    messagingSenderId: "22662289719",
    appId: "1:22662289719:web:2cb7c99b589c6dde59e2b2",
    measurementId: "G-QH6ET1NN55"
  };
initializeApp(firebaseConfig);
getAnalytics(app);

const app = createApp(App);
app.use(router);
app.use(store);
app.component('ModalProfile', ModalProfile)
app.component('MyInput', MyInput)
app.component('GenderChoose', GenderChoose)
app.component('ChooseFromMany', ChooseFromMany)
app.component('SuperCounter', SuperCounter)

app.config.globalProperties.axios = axios

app.mount('#app');

