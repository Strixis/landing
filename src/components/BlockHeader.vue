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

<style lang="sass">
@use 'styles/variables' as *

.header
  display: flex
  justify-content: space-between
  align-items: center
  padding: 7px 14px
  box-sizing: border-box
  background: $color-header-background
  border-radius: 0 0 14px 14px

.logonav-wrapper
  display: flex
  align-items: center

.logo
  margin: 0 40px 0 0

.naviagtion_link
  margin: 0 7px 0 0
  text-decoration: none
  color: $font-header-color
  font-size: 14px
  line-height: 17px
  &:last-child
    margin: 0
  &:hover
    color: $font-hover-header-color

.welcome
  color: $font-header-color
  font-size: 14px
  line-height: 17px
</style>
