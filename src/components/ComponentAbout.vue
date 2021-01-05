<template>
  <div>
    <p class="main-text">
      Меня зовут Константин. Родился 31.07.1995.
      На данный момент мне 25 лет(если не забыл обновить возраст).
      Я очень не люблю фотографироваться, поэтому можете наслаждаться аватаркой в виде филина.
      Периодически играюсь с photoshop и это один из коллажей, который был сделан мною.
    </p>
    <p class="main-text">
      Кроме каких то базовых знаний по photoshop в ходе обучения на frontend-разработчика
      меня заинтересовала figma. Поэтому я решил поиграться с ней и в итоге сделал несколько
      иконок. Логотип с левой стороны шапки — одна их них. Также ниже Вы можете видеть маркеры
      в проектах и лаборатории. Думаю это можно записать в мои достижения.
    </p>
    <p class="main-text">
      Основной сферой моих интересов на данный момент является изучение frontend’а, а именно
      верстки(html/html5, css/css3) и языка JavaScript.
    </p>
    <p class="main-text">
      Обладаю следующими знаниями и умениями:
    </p>
    <ul>
      <li
        v-for="(item, index) of stackList"
        :key="index"
        class="main-text"
      >
        {{ item }}
      </li>
    </ul>
    <p class="main-text">
      В 2018 году окончил МГТУ МИРЭА по специальности
      «Информационная безопасность автоматизированных систем».
      Дата поступления: 2013 год.
    </p>
    <p class="main-text">Кроме этого дополнительно обучаюсь на GeekBrains и имею следующие сертификаты:</p>
    <ul>
      <li
        v-for="(item, index) of knowledgeList"
        :key="index"
      >
        <a :href="item.link" class="main-link">{{ item.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stackList: [
        'Знания HTML, CSS',
        'Базовые знания HTML5, CSS3',
        'Базовые знания JavaScript',
        'Знания JavaScript, стандарты ES5, ES6',
        'Базовые знания vue.js',
        'Умение валидной кроссбраузерной верстки',
        'Умение адаптивной верстки',
        'Базовые знания Git',
        'Базовые знания Photoshop',
        'Базовые знания Figma',
      ],
      knowledgeList: [
        {
          name: 'курс «Основы программирования»',
          link: 'https://geekbrains.ru/go/fuBfzq',
        },
        {
          name: 'курс «Ваш первый текст»',
          link: 'https://geekbrains.ru/go/uT42ks',
        },
        {
          name: 'курс «HTML/CSS. Интерактивный курс»',
          link: 'https://geekbrains.ru/go/yoM6LG',
        },
        {
          name: 'курс «Веб-разработка. Быстрый старт»',
          link: 'https://geekbrains.ru/go/z1OtbK',
        },
        {
          name: '«Основы программирования. Видеокурс»',
          link: 'https://geekbrains.ru/go/XuJYlb',
        },
      ],
    };
  },
}
</script>
