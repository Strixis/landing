<template>
  <header class="header">
    <a href="#" class="logo"><img :src="logo" alt="logo"></a>
      <SimpleComponentNavigation
        :links="links"
        :classes="navigationClasses"
        :class="{ __hidden: !showMenu }"
      />
      <span class="welcome">Приветствую Вас на моей страничке!</span>
      <button
        class="navigation_button"
        @click="showMenu = !showMenu"
      >
        {{ !showMenu ? 'M' : 'X' }}
      </button>
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
      showMenu: true,
      clientWidth: 0,
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
    };
  },
  methods: {
    handleResize() {
      window.innerWidth > 570 ? this.showMenu = true : this.showMenu = false;
    },
  },
  created() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
}
</script>

