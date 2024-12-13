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
      <img src="../../../public/image/DNS.svg" class="logo" alt="">
        <div class="column">
            <h2 class="title">Рекомендации <br> подарка</h2>
            <img class="img" src="" alt="">
            <div class="flex-start">
                <p class="description">Описание</p>
            </div>
            <my-button>Купить</my-button>
            <img class="star-1" src="../../../public/image/image 26.svg" alt="">
            <img class="star-2" src="../../../public/image/image 17.svg" alt="">
            <img class="star-3" src="../../../public/image/image 22.svg" alt="">
            <img class="star-4" src="../../../public/image/image 30.svg" alt="">
            <img class="star-5" src="../../../public/image/image 26.svg" alt="">
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
.wrap {
  background-color: #F36A38; /* Замените этот цвет на желаемый */
  margin: 0 auto;
  width: 1369px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.logo{
  color: white;
  font-size: 50px;
  width: 140px;
  margin-left: 170px;
  margin-top: 20px;
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
  position: relative;
  margin-bottom: 200px;

}

.img{
  height: 695px;
  width: 1293px;
  border-radius: 15px;
  background-color: #D9D9D9;
  z-index: 1;
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

.star-1{
  position: absolute;
  left: 100px;
  transform: rotate(10deg);
}
.star-2{
  position: absolute;
  right: 100px;
  bottom: -50px;
}
.star-3{
  position: absolute;
  left: 100px;
  bottom: -150px;
  transform: rotate(15deg);
}
.star-4{
  position: absolute;
  right: 100px;
  top: -50px;
}
.star-5{
  position: absolute;
  left: 570px;
  bottom: 70px;
}
</style>