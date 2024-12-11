<script>

export default {
  name: "my-input",
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event){
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<style>
.input{
  background-color: rgb(254, 255, 255);
  border-radius: 15px;
  border: 1px solid #989898;
  font-size: 40px;
  padding: 15px;
  width: 1167px;
  height: 76px;
}
</style>