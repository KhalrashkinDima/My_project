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



const app = createApp(App);
app.use(router);
app.use(store);
app.component('ModalProfile', ModalProfile)
app.component('MyInput', MyInput)
app.component('GenderChoose', GenderChoose)
app.component('ChooseFromMany', ChooseFromMany)

app.config.globalProperties.axios=axios

app.mount('#app');

