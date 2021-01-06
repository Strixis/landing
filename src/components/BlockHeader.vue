<template>
  <header class="header">
    <div class="logonav-wrapper">
      <a href="#" class="logo"><img :src="logo" alt="logo"></a>
      <SimpleComponentNavigation
        :links="links"
        :classes="navigationClasses"
      />
    </div>
    <span class="welcome">Приветствую Вас на моей страничке!</span>
  </header>
</template>

<script>
import SimpleComponentNavigation from 'components/SimpleComponentNavigation';

import logo from 'img/logo-mini.svg';

export default {
  components: {
    SimpleComponentNavigation,
  },
  data() {
    return {
      logo,
      links: [
        {
        name: 'Главная',
        link: '#',
        },
        {
          name: 'Проекты',
          link: '#projects',
        },
        {
          name: 'Лаборатория',
          link: '#lab',
        },
      ],
      navigationClasses: {
        nav: 'navigation',
        link: 'navigation_link',
      },
    }
  }
}
</script>

