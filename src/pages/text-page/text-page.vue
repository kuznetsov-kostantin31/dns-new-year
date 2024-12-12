<script>
import { myButton } from '../../shared/UI/my-button';
import { myInput } from '../../shared/UI/my-input';
import { myText } from '../../shared/UI/my-text';


export default {
  name: 'text-page',
  components: {myInput, myButton, myText}
}
</script>

<template>
    <body>
        <h1>Напишите запрос для поиска подарка</h1>
        <my-input/>
    </body>
</template>

<style>
body {
    font-family: Arial, sans-serif;
    background-color: #F36A38;
    margin: 0;
    padding: 20px;
}
</style>