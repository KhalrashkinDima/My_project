<template>
  <fieldset class="form-group mt-2">
    <div class="row">
      <div class="col-form-label col-5 pt-0">{{ mainquestion }}</div>
      <div class="col-7">
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="gridRadios"
            id="gridRadios1"
            value="male"
            checked
          />
          <label class="form-check-label" for="gridRadios1">
            {{ answer1 }}
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="gridRadios"
            id="gridRadios2"
            value="female"
          />
          <label class="form-check-label" for="gridRadios2">
            {{ answer2 }}
          </label>
        </div>
      </div>
    </div>
  </fieldset>
</template>
<script>
export default {
  name: "GenderChoose",
  props: {
    mainquestion: {
      type: String,
      default: "Укажите Ваш пол",
    },
    answer1: {
      type: String,
      default: "Мужской",
    },
    answer2: {
      type: String,
      default: "Женский",
    },
  },
};
</script>
