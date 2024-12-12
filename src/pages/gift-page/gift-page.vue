<script>
import { myButton } from '../../shared/UI/my-button';
import { myInput } from '../../shared/UI/my-input';
import { myText } from '../../shared/UI/my-text';


export default {
  name: 'gifts-page',
  components: {myInput, myButton, myText}
}
</script>

<template>
 <body>
    <div class="wrap">
        <h1 class="logo">DNS</h1>
        <div class="column">
            <h2 class="title">Рекомендации <br> подарка</h2>
            <img class="img" src="" alt="">
            <div class="flex-start">
                <p class="description">Описание</p>
            </div>
            <my-button>Купить</my-button>
        </div>
    </div> 
 </body>
  
</template>

<style scoped>
body{
    background-color: #F36A38;
    width: 100%;
    height: 100%;
}
.wrap{
  margin: 0 auto;
  width: 1369px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.logo{
  color: white;
  font-size: 50px;
  margin-left: 10%;
}

.title{
  font-size: 64px;
  text-align: center;
  color: white;
}

.column{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
}

.img{
  height: 695px;
  width: 1293px;
  border-radius: 15px;
  background-color: gray;
}
.description{
    font-size: 48px;
    color: white;
}
.flex-start{
    display: flex;
    justify-content: start;
    width: 90%;
    margin-bottom: 50px;
}
</style>