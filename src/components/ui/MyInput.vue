<template>
  <label class="mt-2">{{ label }}</label>
  <input
    type="text"
    required="required"
    class="w-100 mt-2 form-control"
    v-model="value"
  />
</template>
<script>
export default {
  name: "MyInput",
  props: {
    label: {
      type: String,
      default: "Введите логин",
    },
    modelValue: String,
  },
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
};
</script>
