<template>
  <div>
    <p class="main-text">
      Меня зовут Константин. Родился 31.07.1995.
      На данный момент мне {{ old }} лет(если функция отработала правильно).
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
    <p class="main-text">
      Кроме этого дополнительно обучался на
      <a href="https://geekbrains.ru/go/K6kf09" class="main-link">GeekBrains</a>
      и имею следующие сертификаты:</p>
    <ul>
      <li
        v-for="(item, index) of knowledgeList"
        :key="index"
      >
        <a
          :href="item.link"
          target="_blank"
          class="main-link"
        >
          {{ item.name }}
        </a>
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
        'Базовые знания Vue',
        'Базовые знания React',
        'Базовые знания Webpack',
        'Умение валидной кроссбраузерной верстки',
        'Умение адаптивной верстки',
        'Базовые знания Git',
        'Базовые знания Photoshop',
        'Базовые знания Figma',
      ],
      knowledgeList: [
        {
          name: 'JavaScript. Уровень 1. ИК',
          link: 'https://geekbrains.ru/certificates/945666',
        },
        {
          name: 'JavaScript. Уровень 2. ИК',
          link: 'https://geekbrains.ru/certificates/1018751',
        },
        {
          name: 'ReactJS. ИК',
          link: 'https://geekbrains.ru/certificates/1079912',
        },
        {
          name: 'HTML/CSS. ИК',
          link: 'https://geekbrains.ru/certificates/935543',
        },
        {
          name: 'HTML5 и CSS3. ИК',
          link: 'https://geekbrains.ru/certificates/976067',
        },
      ],
    };
  },
  computed: {
    old: () => {
      const birthday = {
        day: 31,
        month: 7,
        year: 1995,
      };

      const dateNow = new Date();

      let old = dateNow.getFullYear() - birthday.year;

      if (dateNow.getMonth() < birthday.month) {
        if (dateNow.getDay() < birthday.day) old -= 1;
      };
      
      return old;
    },
  },
}
</script>
