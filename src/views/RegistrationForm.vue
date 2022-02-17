<template>
  <div class="col-12 col-lg-8 container-fluid mt-2 text-light">
    <div class=" col-12 col-md-6 registration p-2">
      <form class="text-center login">
        <div class="text-center">
          <div class="mt-4 text-center h5">Регистрационная форма</div>
          <my-input label="Введите логин" v-model="name" />
          <my-input label="Введите email" v-model="email" />
          <my-input label="Введите пароль" v-model="password" />
          <my-input label="Повторите пароль" v-model="password2" />
          <gender-choose v-model="gender" />
          <choose-from-many             v-model="value"
             v-bind:options="countries" />
        </div>
        <button class="mt-4 btn btn-primary mb-2" @click="Registration">
          Зарегистрироваться
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import MyInput from "../components/ui/MyInput.vue";
export default {
  components: { MyInput },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password2: "",
      gender: "",
      countries: [
        { text: "Украина", value: "A", selected: true },
        { text: "Россия", value: "B" },
        { text: "Беларусь", value: "C" },
        { text: "Казахстан", value: "D" },
      ],
      value: "",
    };
  },
  methods: {
    Registration: function () {
      if (this.password !== this.password2) {
        alert("Пароли не совпадают");
      }
      let data = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      this.$store
        .dispatch("users/sign", data)
        .then(() => this.$router.push("/"))
        .catch((err) => console.log(err));
    },
  },
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
