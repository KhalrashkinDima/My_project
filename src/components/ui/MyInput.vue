<template>
<label class="mt-2">{{label}}</label>
    <input
            type="text"
            required="required"
            class="w-100 mt-2 form-control"
            
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
    },
};
</script>
