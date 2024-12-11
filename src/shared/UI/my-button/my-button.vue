<script>
export default {
  name: 'my-button'
}
</script>

<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<style>

.btn{
  background-color: rgb(254, 255, 255);
  width: 297px;
  height: 95px;
  border-radius: 15px;
  border: 1px solid #989898;
  font-size: 40px;
  
}
</style>