<template>
  <header class="header">
    <div class="logonav-wrapper">
      <a href="#" class="logo"><img :src="logo" alt="logo"></a>
      <ComponentNavigation :links="links" />
    </div>
    <span class="welcome">Приветствую Вас на моей страничке!</span>
  </header>
</template>

<script>
import ComponentNavigation from 'components/ComponentNavigation';

import logo from 'img/Logo.svg';

export default {
  components: {
    ComponentNavigation,
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
    }
  }
}
</script>

