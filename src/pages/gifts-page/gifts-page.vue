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
  <div class="wrap">
    <img src="/public/image/DNS.svg" class="logo" alt="">
      <div class="column">
        <h2 class="title">Рекомендации <br> подарка</h2>
        <div class="gifts">
          <div class="gift-box">
            <img class="gift-box__img" src="" alt="">
            <div class="gift-box__margin">
              <div class="gift-box__column-start">
                <p class="gift-box__name">Название товара</p>
                <p class="gift-box__description">Описание товара</p>
              </div>
              <div class="gift-box__flex">
                <p class="gift-box__price">3000₽</p>
                <a href="/gift"><my-text>Подробнее</my-text></a>
              </div>
            </div>
          </div> 
          <div class="gift-box">
            <img class="gift-box__img" src="" alt="">
            <div class="gift-box__margin">
              <div class="gift-box__column-start">
                <p class="gift-box__name">Название товара</p>
                <p class="gift-box__description">Описание товара</p>
              </div>
              <div class="gift-box__flex">
                <p class="gift-box__price">3000₽</p>
                <a href="/gift"><my-text>Подробнее</my-text></a>
              </div>
            </div>
          </div>
          <div class="gift-box">
            <img class="gift-box__img" src="" alt="">
            <div class="gift-box__margin">
              <div class="gift-box__column-start">
                <p class="gift-box__name">Название товара</p>
                <p class="gift-box__description">Описание товара</p>
              </div>
              <div class="gift-box__flex">
                <p class="gift-box__price">3000₽</p>
                <a href="/gift"><my-text>Подробнее</my-text></a>
              </div>
            </div>
          </div> 
          <div class="gift-box">
            <img class="gift-box__img" src="" alt="">
            <div class="gift-box__margin">
              <div class="gift-box__column-start">
                <p class="gift-box__name">Название товара</p>
                <p class="gift-box__description">Описание товара</p>
              </div>
              <div class="gift-box__flex">
                <p class="gift-box__price">3000₽</p>
                <a href="/gift"><my-text>Подробнее</my-text></a>
              </div>
            </div>
          </div> 

          <img class="star-1" src="/public/image/image 26.svg" alt="">
          <img class="star-2" src="/public/image/image 30.svg" alt=""> 
          <img class="star-3" src="/public/image/image 22.svg" alt="">
          <img class="star-4" src="/public/image/image 22.svg" alt="">
          <img class="star-5" src="/public/image/image 17.svg" alt="">
          <img class="star-6" src="/public/image/image 30.svg" alt=""> 
          <img class="star-7" src="/public/image/image 17.svg" alt="">
          <img class="star-8" src="/public/image/image 22.svg" alt="">
        </div>
      </div>
  </div>
</template>

<style scoped> 

.wrap{
  background-color: #F36A38;
  width: 1369px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.gifts{
  display: flex;
  flex-wrap: wrap;
  max-width: 1369px;
  margin-top: 50px;
  margin-bottom: 350px;
  gap: 100px;
  position: relative;
}

.logo{
  color: white;
  font-size: 50px;
  margin-top: 20px;
  margin-right: 900px;
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
}

.gift-box__column-start{
  display: flex;
  flex-direction: column;
  align-items: start;
}

.wrap{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
}

.gift-box{
  width: 622px;
  height: 601px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 0 auto;
  z-index: 1;

}

.gift-box__img{
  height: 341px;
  width: 622px;
  border-radius: 15px;
  background-color: #D9D9D9;
}

.gift-box__flex{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.gift-box__margin{
  margin-left: 20px;
  margin-right: 20px;
}

.gift-box__name{
  font-size: 48px;
  color: #F36A38;
}

.gift-box__description{
  font-size: 40px;
  color: black;
}

.gift-box__price{
  font-size: 48px;
  color: #F36A38;
}

.star-1{
  position: absolute;
  top: -200px;
  left: 200px;
}
.star-2{
  position: absolute;
  top: -250px;
  left: 1100px;
}
.star-3{
  position: absolute;
  top: 420px;
  left: 300px;
}
.star-4{
  position: absolute;
  bottom: -210px;
  left: 300px;
}
.star-5{
  position: absolute;
  bottom: -300px;
  right: 200px;
}
.star-6{
  position: absolute;
  bottom: 650px;
  right: 490px;
}
.star-7{
  position: absolute;
  bottom: 300px;
  right: -100px;
}
.star-8{
  position: absolute;
  bottom: 0px;
  right: 480px;
}
</style>