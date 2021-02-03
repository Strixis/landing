<template>
  <main class="main">
    <BlockAboutMe />
    <a href="#" name="projects"></a>
    <SimpleComponentSectionPreview
      :section="projects"
      :classes="projectClasses"
    />
    <a href="#" name="lab"></a>
    <SimpleComponentSectionPreview
      :section="lab"
      :classes="labClasses"
    />
  </main>
</template>

<script>
import BlockAboutMe from 'components/BlockAboutMe';
import SimpleComponentSectionPreview from 'components/SimpleComponentSectionPreview';

const projectFolder = './side/projects',
  labFolder = './side/lab';

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
    SimpleComponentSectionPreview,
  },
  data() {
    return {
      projects: {
        title: 'Проекты',
        description: 'В данном разделе представлены готовые проекты в которых я принимал участие.',
        sectionList: [
          {
            link: `${projectFolder}/interrior/interrior.html`,
            name: 'Interior',
            description: ` - первый проект по курсу HTML/CSS. Цель: узнать основы html/css,
научиться работать с дизайн-макетом.`,
          },
          {
            link: `${projectFolder}/New_Automayion_Tools/New_Automayion_Tools.html`,
            name: 'New Automation Tool for Your',
            description: ` - второй проект по курсу HTML/CSS. Цель: закрепить знания по html/css,
научиться работать с дизайн-макетом в figma.`
          },
          {
            link: `${projectFolder}/waxom/waxom.html`,
            name: 'Waxom',
            description: ` - зачетный проект по курсу HTML5/CSS3. Цель: закрепить знания по
семантическим элементам html5, переходам и анимациям css3, показать навыки верстки.`
          },
        ],
      },
      projectClasses: {
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
      lab: {
        title: 'Лаборатория',
        description: 'Добро пожаловать в мою скромную лабораторию!',
        sectionList: [
          {
            link: 'https://github.com/Strixis',
            name: 'GitHub',
            description: ` - мой github.`,
          },
          {
            link: `${labFolder}/chess/chess.html`,
            name: 'Шахматы!',
            description: ` - Задача: средствами JavaScript отобразить шахматную доску с фигурами.
Цель: научиться основам взаимодействия с dom-деревом при помощи js. Возможно когда нибудь это будет
полноценными шахматами.`
          },
          {
            link: `${labFolder}/scalc/scalc.html`,
            name: 's-Calc',
            description: ` - Собственная разработка. Калькулятор. Позволяет посчитать стоимость 
            услуг, товаров, зарплату на сделке или что то еще о чем я пока не догадываюсь.
            Сделан максимально просто - достаточно ввести расценку, количество и получаем итог.
            Название операции сделано для удобства, необязательно. Работает по схеме: ввели
            данные - получили результат - записали на бумажку или еще куда то. Расчет был на
            людей которые умеют пользоваться смартфонами и интернетом, но не хотят сильно
            заморачиваться. Это удобнее чем обычный калькулятор и не так сложно как таблицы.`
          },
        ],
      },
      labClasses: {
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
    };
  },
}
</script>
