<template>
  <section class="about-me">
    <img :src="photo" alt="photo" class="about-me_photo">
    <div class="about-me_content">
      <button
        v-for="(section, index) of sections"
        :key="index"
        @click="activeSection = section.component"
        class="about-me_link"
        :class="{__active: activeSection === section.component}"
      >
        {{ section.name }}
      </button>
      <transition name="a-hidenseek" mode="out-in">
        <component :is="activeSection" />
      </transition>
    </div>
  </section>
</template>

<script>
import ComponentWelcome from 'components/ComponentWelcome';
import ComponentAbout from 'components/ComponentAbout';
import ComponentContacts from 'components/ComponentContacts';
import photo from 'img/photo.jpg';

export default {
  components: {
    ComponentWelcome,
    ComponentAbout,
    ComponentContacts,
  },
  data() {
    return {
      photo,
      sections: [
        {
          name: 'Представление',
          component: 'ComponentWelcome',
        },
        {
          name: 'Обо мне',
          component: 'ComponentAbout',
        },
        {
          name: 'Контакты',
          component: 'ComponentContacts',
        },
      ],
      activeSection: 'ComponentWelcome',
    };
  },
}
</script>
