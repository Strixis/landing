<template>
  <header class="header">
    <div class="logonav-wrapper">
      <a href="#" class="logo"><img :src="logo" alt="logo"></a>
      <ComponentNavigation :navigation="navigation" />
    </div>
    <span class="welcome">Приветствую Вас на моей страничке!</span>
  </header>
</template>

<script>
import ComponentNavigation from 'components/ComponentNavigation';

import logo from 'img/logo-mini.svg';

export default {
  components: {
    ComponentNavigation,
  },
  data() {
    return {
      logo,
      navigation: {
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
        class: {
          nav: 'navigation',
          link: 'navigation_link',
        },
      },
    }
  }
}
</script>

