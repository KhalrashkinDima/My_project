<template>
  <div id="v-model-select-dynamic" class="">
    Из какой вы страны:
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
    data() {
    return {
      selected: "A",
      options: [
        { text: "Украина", value: "A" },
        { text: "Россия", value: "B" },
        { text: "Беларусь", value: "C" },
        { text: "Казахстан", value: "D" },
      ],
    };
  },
};
</script>