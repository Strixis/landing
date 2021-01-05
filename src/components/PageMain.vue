<template>
  <main class="main">
    <BlockAboutMe />
    <ComponentSection :section="projects" />
    <ComponentSection :section="lab" />
  </main>
</template>

<script>
import BlockAboutMe from 'components/BlockAboutMe';
import ComponentSection from 'components/ComponentSection';

const main = 'section',
  title= 'heading',
  description = 'section_description sub-text',
  sectionList = {
    main: 'section-list',
    item: 'section-list_item clearfix',
    link: 'main-link',
    text: 'main-text',
  };

export default {
  components: {
    BlockAboutMe,
    ComponentSection,
  },
  data() {
    return {
      projects: {
        title: 'Проекты',
        description: 'В данном разделе представлены готовые проекты в которых я принимал участие.',
        sectionList: [
          {
            link: '#',
            name: 'Interior',
            description: ` - первый проект по курсу HTML/CSS. Цель: узнать основы html/css,
научиться работать с дизайн-макетом.`,
          },
          {
            link: '#',
            name: 'New Automation Tool for Your',
            description: ` - второй проект по курсу HTML/CSS. Цель: закрепить знания по html/css,
научиться работать с дизайн-макетом в figma.`
          },
          {
            link: '#',
            name: 'Waxom',
            description: ` - зачетный проект по курсу HTML5/CSS3. Цель: закрепить знания по
семантическим элементам html5, переходам и анимациям css3, показать навыки верстки.`
          },
        ],
        classes: {
          main,
          title,
          description,
          sectionList: {
            main: sectionList.main,
            item: `${sectionList.item} projects`,
            link: sectionList.link,
            text: sectionList.text,
          },
        },
      },
      lab: {
        title: 'Лаборатория',
        description: 'Добро пожаловать в мою скромную лабораторию!',
        sectionList: [
          {
            link: '#',
            name: 'GitHub',
            description: ` - мой github.`,
          },
          {
            link: '#',
            name: 'Шахматы!',
            description: ` - Задача: средствами JavaScript отобразить шахматную доску с фигурами.
Цель: научиться основам взаимодействия с dom-деревом при помощи js. Возможно когда нибудь это будет
полноценными шахматами.`
          },
        ],
        classes: {
          main,
          title,
          description,
          sectionList: {
            main: sectionList.main,
            item: sectionList.item,
            link: `${sectionList.link} lab`,
            text: sectionList.text,
          },
        },
      },
    };
  },
}
</script>
