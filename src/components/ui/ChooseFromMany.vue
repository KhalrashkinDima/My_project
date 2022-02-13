<template>
  <div id="v-model-select-dynamic" class="">
    {{question}}
    <select v-model="selected">
      <option v-for="option in options" :value="option.value">
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "ChooseFromMany",
      props: {
        question: {
            type: String,
            default: "Из какой вы страны?",
        },
        modelValue: String,
        options: Object,
    },
    data() {
    return {
      /* selected: "A", */
/*       options: [
       
      ], */
    };
  },
  computed: {
    selected: {
      get() {
        return this.modelValue;
      },
      set(selected) {
        this.$emit("update:modelValue", selected);
      },
    },
  },
};
</script>