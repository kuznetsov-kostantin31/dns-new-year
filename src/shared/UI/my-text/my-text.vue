<script>
export default {
  name: 'my-text'
}
</script>

<template>
  <p class="text">
    <slot></slot>
  </p>
</template>

<style>
.text{
  background-color: #FF955C;
  border-radius: 15px;
  font-size: 40px;
  padding: 15px;
  color: #FFFF;
  text-shadow: 3px 1px 1px #00000060;
}
</style>