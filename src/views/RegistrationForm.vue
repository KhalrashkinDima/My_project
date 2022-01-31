<template>
  <div class="col-md-8 col-lg-8 container-fluid mt-2 text-light">
    <div class="col-6 registration p-2">
      <form class="text-center login">
        <div class="text-center">
          <div class="mt-4 text-center h5">Регистрационная форма</div>
          <my-input label="Введите логин" v-model="name"/>
          <my-input label="Введите email" v-model="email"/>
          <my-input label="Введите пароль" v-model="password"/>
          <my-input label="Повторите пароль" v-model="password2"/>
          <gender-choose v-model="gender"/>
          <choose-from-many v-model="country"/>
        </div>
        <button class="mt-4 btn btn-primary mb-2" @click="submit">
          Зарегистрироваться
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import MyInput from "../components/ui/MyInput.vue";
export default {
  data() {
    return {
      name:"",
      email:"",
      password:"",
      password2:"",
      gender:"",
      country:"",
      is_admin : null,
    };
  },
  components: { MyInput },
  methods: {
      register: function () {
        let data = {
          name: this.name,
          email: this.email,
          password: this.password,
          is_admin: this.is_admin
        }
        this.$store.dispatch('REG', data)
       .then(() => this.$router.push('/'))
       .catch(err => console.log(err))
      }
    }
};
</script>

<style>
.registration {
  background: linear-gradient(to bottom, #3f5062, #747677);
  border-radius: 50px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
    0 4px 4px rgba(0, 0, 0, 0.11), 0 8px 8px rgba(0, 0, 0, 0.11),
    0 16px 16px rgba(0, 0, 0, 0.11), 0 32px 32px rgba(0, 0, 0, 0.11);
  border: 2px solid;
}
</style>
