<script>
import { myButton } from '../../shared/UI/my-button';
import { myInput } from '../../shared/UI/my-input';
import { myText } from '../../shared/UI/my-text';


export default {
  name: 'main-page',
  // когда добавляете компоненты, пишите их сюда, через запятую
  components: {myInput, myButton, myText}
}
</script>

<template>
    <h1>Main page</h1>
    <!-- Пример как выглядит инпут -->
    <my-input 
      type="text"
      placeholder="Поиск"
    />
    <my-button>
      Кнопка
    </my-button>
    <my-text>
      Какой то текст
    </my-text>
</template>

<style></style>