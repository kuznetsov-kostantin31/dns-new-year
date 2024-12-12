<template>
  <div class="app">
    <a href="https://www.dns-shop.ru/">
      <div class="dns">DNS</div> <!-- Буквы DNS -->
    </a>
    
    
    <div class="form-container">
      <img src="./image-removebg-preview.png" class="star star-left" alt="Star 1" />
      <img src="./image-removebg-preview (1).png" class="star star-right" alt="Star 2" />
      
      <h1>
        Добро пожаловать<br>
        в наш сервис<br>
        подбора подарков!
      </h1>
      <div class="button-container">
        <a href="/text">
          <button>Текстовый поиск</button>
        </a>
        <a href="/form">
          <button>Заполнить форму</button>
        </a>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
  }
}
</script>

<style scoped>
/* Общие стили */
.app {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('./photo_2024-12-12_18-10-09.jpg'); 
  background-size: cover;
  background-position: center; 
  height: 100vh; 
  position: relative; 
}

.dns {
  position: absolute; 
  top: 20px; 
  left: 40px; 
  font-size: 64px; 
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); 
  font-weight: bold; 
  cursor: pointer; 
  transition: transform 0.3s ease, color 0.3s ease; 
}

.dns:hover {
  transform: scale(1.1); 
  color: #ED8122; 
}

.form-container {
  background-color: rgb(255, 255, 255); 
  padding: 50px; 
  border-radius: 70px; 
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3); 
  text-align: center;
  width: 700px; 
  position: relative; 
}

.form-container h1 {
  font-size: 36px; 
  font-weight: 800; 
  color: black; 
  text-shadow: 2px 2px 4px rgba(161, 149, 149, 0.7);
  margin-bottom: 35px; 
}

.button-container {
  display: flex; 
  justify-content: space-between; 
}

.form-container button {
  flex: 1; 
  margin: 0 15px; 
  padding: 20px; 
  font-size: 22px; 
  font-weight: 900;
  color: black; 
  background-color: white; 
  border: 2px solid #ED8122; 
  border-radius: 20px; 
  cursor: pointer;
  transition: all 0.3s ease; 
}

.form-container button:hover,
.form-container button:active {
  background-color: #ED8122; 
  color: white; 
}

/* Стили для звездочек */
.star {
   position: absolute;
   width: auto;
   height: auto;
   z-index: 1; /* Увеличиваем z-index для звезд */
}

.star-left {
   bottom: -150px; /* Сдвинуть вниз */
   left: -130px; /* Сдвинуть влево */
}

.star-right {
   top: -170px; /* Сдвинуть вверх */
   right: -10px; /* Сдвинуть вправо */
   height: 300px;
}
</style>
