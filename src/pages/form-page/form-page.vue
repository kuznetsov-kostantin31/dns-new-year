<script>
export default{
    name: "form-page"
}

const dnsButton = document.getElementById('dnsButton');

// Изменение стиля кнопки DNS при наведении и убирание эффекта при уходе курсора
dnsButton.addEventListener('mouseenter', () => {
    dnsButton.style.transform = 'scale(1.1)'; // Увеличение при наведении
});

dnsButton.addEventListener('mouseleave', () => {
    dnsButton.style.transform = 'scale(1)'; // Возвращение к исходному размеру
});

// Обработка клика по кнопке DNS
dnsButton.addEventListener('click', () => {
    alert('Клик по DNS');
});

</script>

<template>
    <body>
    <div class="background-image"></div>
    <div class="dns" id="dnsButton">DNS</div> <!-- Добавлен id для динамичности -->
    
    <div class="container">
        <h1>Заполните форму для подбора подарка</h1>
        <form class="form-container">
            <div class="section">
                <h2>Для кого подарок?</h2>
                <div class="button-container">
                    <button type="button">Ребенку</button>
                    <button type="button">Мужчинам</button>
                    <button type="button">Женщинам</button>
                </div>
            </div>
            <div class="section">
                <h2>Какая категория?</h2>
                <select class="form-groups" name="category">
                    <option value="household_appliances">Бытовая техника </option>
                    <option value="beauty_and_health">Красота и здоровье</option>
                    <option value="tv_aydio">ТВ, консоли и аудио</option>
                    <option value="recreation_and_entertainment">Отдых и развлечения</option>
                    <option value="home_and_decor">Дом, декор и посуда</option>
                </select>
            </div>
            <div class="section">
                <h2>На какое событие?</h2>
                <div class="button-container">
                    <button type="button">День рождения</button>
                    <button type="button">Новый год</button>
                    <button type="button">Праздник</button>
                </div>
            </div>

            <div class="section">
                <h2>Какой бюджет?</h2>
                <div class="button-container">
                    <button type="button">до 2 000</button>
                    <button type="button">3 000 - 5 000</button>
                    <button type="button">свыше 10 0000</button>
                </div>
            </div>

            <button type="submit" class="submit-button button">Подобрать подарок</button>
        </form>
    </div>
    
    </body>
</template>
<style>
        body {
            font-family: Arial, sans-serif;
            background-color: #F36A38; 
            color: white;
            text-align: center;
            position: relative;
            margin: 0;
            padding: 0; 
        }
        header {
            background-color: #FFFFFF;
            padding: 20px;
            margin-bottom: 20px;
        }

        img {
            max-width: 100%;
            height: auto;
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
            transform: scale(1.1); /* Увеличение при наведении */
            color: #ED8122; /* Изменение цвета при наведении */
        }

        h1 {
            background: #FFFFFF;
            border-radius: 15px;
            line-height: 66px;
            color: #000000;
            font-size: 42px;
            margin: 10px;
        }

        h2 {
            color: #ffffff;
            font-weight: bold;
            line-height: 57px;
            text-shadow: 0px 0px 5px black;
            background: #FF955C;
            padding: 10px; 
        }

        .container {
            padding: 20px;
            border-radius: 10px;
            margin: 0 auto;
            max-width: 600px;
            position: relative; 
            z-index: 1; 
        }

        .section {
            margin: 20px 0;
        }

        .background-image {
            background-image: url('./image.jpg');
            background-size: cover; 
            position: absolute; 
            top: 0; 
            right: 0; 
            bottom: 0; 
            left: 50%; 
            width: 739px;
        }

        .button-container {
            display: flex; 
            flex-wrap: wrap; 
            justify-content: space-between; 
        }

        .form-container button {
            flex-basis: calc(33% - 10px); 
            margin-bottom: 15px;
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
        .form-groups{ 
            font-family: Arial, sans-serif;
            width: 600px;
            font-size: 20px;
        }

        .form-container button:hover,
        .form-container button:active {
            background-color: #ED8122; 
            color: white; 
        }

        .submit-button {
            background-color: #ffffff; 
            color: rgb(0, 0, 0);
            font-size: 30px;
            margin-top: 20px;
            border-radius: 10px;
        }

        @media (max-width: 768px) {
            .dns {
                font-size: 48px; 
                left: 20px; 
                top: 10px; 
            }

            h1 {
                font-size: 28px;
                line-height: normal; 
                padding: 10px; 
                margin-bottom: 15px; 
                border-radius: 10px;
                box-shadow: 0 2px 5px rgba(0,0,0,0.3); 
            }

            h2 {
                font-size: 24px; 
                line-height: normal; 
                padding: 8px; 
                margin-bottom: 10px; 
                border-radius: 10px; 
                box-shadow: 0 2px 5px rgba(0,0,0,0.3);
            }

            .form-container button {
                flex-basis: calc(100% - 10px); 
                font-size: 20px; 
                padding: 15px;
                margin-bottom: 10px; 
                border-radius: 15px;
                box-shadow: none; 
            }
            
            .submit-button {
                font-size: 24px; 
                padding: 15px; 
                border-radius: 15px; 
                margin-top: 15px; 
                width: calc(100% - 20px); 
                box-shadow: none; 
            }
        }
     
</style>


