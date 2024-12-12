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
    <h1 class="logo">DNS</h1>
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
                <p class="gift-box__price">3000р</p>
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
                <p class="gift-box__price">3000р</p>
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
                <p class="gift-box__price">3000р</p>
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
                <p class="gift-box__price">3000р</p>
                <a href="/gift"><my-text>Подробнее</my-text></a>
              </div>
            </div>
          </div> 
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
  margin-bottom: 50px;
  gap: 50px;
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
}

.gift-box__img{
  height: 341px;
  width: 622px;
  border-radius: 15px;
  background-color: gray;
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

</style>