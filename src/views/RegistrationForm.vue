<template>
  <div class="col-md-8 col-lg-8 container-fluid mt-2 text-light">
    <div class="col-6 registration p-2">
      <form class="text-center">
        <div class="text-center">
          <div class="mt-4 text-center h5">Регистрационная форма</div>
          <my-input />
          <div class="large-12 medium-12 small-12 cell mt-4">
            <label
              >Выберите аватар
              <input
                type="file"
                id="file"
                ref="file"
                @change="handleFileUpload()"
              />
            </label>
          </div>
          <my-input label="Введите email" />
          <my-input label="Введите пароль" />
          <my-input label="Повторите пароль" />
          <gender-choose />
          <choose-from-many />
        </div>
        <button class="mt-4 btn btn-primary mb-2" @click="RegistrationComplete">
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
  methods: {
    RegistrationComplete() {},
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
