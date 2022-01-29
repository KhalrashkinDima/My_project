<template>
  <div class="col-md-8 col-lg-8 container-fluid mt-2 text-light">
    <div class="col-6 verification p-2" @submit.prevent="login">
      <form class="text-center">
        <div class="text-center">
          <div class="mt-4 text-center h5">Авторизация</div>
          <my-input label="Введите логин" v-model="name" />
          <my-input label="Введите логин" v-model="password" />
          <button class="mt-4 btn btn-primary" type="submit">Войти</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data () {
    return {
      name:"",
      password:"",
    };
  },
  methods: {
  },
};
</script>
<style>
.verification {
  background: linear-gradient(to bottom, #3f5062, #747677);
  border-radius: 50px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
    0 4px 4px rgba(0, 0, 0, 0.11), 0 8px 8px rgba(0, 0, 0, 0.11),
    0 16px 16px rgba(0, 0, 0, 0.11), 0 32px 32px rgba(0, 0, 0, 0.11);
  border: 2px solid;
}
</style>
