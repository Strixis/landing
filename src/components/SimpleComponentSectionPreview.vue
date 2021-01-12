<template>
  <div :class="classes.main">
    <h2 :class="classes.title">{{ section.title }}</h2>
    <p :class="classes.description">{{ section.description }}</p>
    <ul :class="classes.sectionList.main">
      <li
        v-for="(item, index) of section.sectionList"
        :key="index"
        :class="classes.sectionList.item"
      >
        <a
          :href="item.link"
          target="_blank"
          :class="classes.sectionList.link"
        >
          {{ item.name }}
        </a>
        <span :class="classes.sectionList.text">
          {{ item.description }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    section: {
      type: Object,
      required: true,
      validator: (value) => {
        let result = false;
        const sectionProperties = [
          'title',
          'description',
          'sectionList',
        ];
        if (
          sectionProperties.every((propertie) => value.hasOwnProperty(propertie))
          && Object.keys(value).every((key) => (
            key === 'sectionList' ? Array.isArray(value[key]) : (typeof value[key] === 'string')
          ))
        ) {
          const sectionList = value.sectionList;
          const sectionListProperties = [
            'link',
            'name',
            'description',
          ]
          if (
            sectionList.every((item) => (
              sectionListProperties.every((propertie) => item.hasOwnProperty(propertie))
              && sectionList.every((sectionListItem) => (
                Object.keys(sectionListItem).every(
                  (key) => (typeof sectionListItem[key] === 'string')
                )
              ))
            ))
          ) result = true;
        };

        if (!result) console.warn(
`Prop "section" should be
  {
    title: String,
    description: String,
    sectionList: [
      {
        link: String,
        name: String,
        description: String,
      },
      ...
    ],
  }`
        );

        return result;
      },
    },
    classes: {
      type: Object,
      required: true,
      validator: (value) => {
        let result = false;
        const classesProperties = [
          'main',
          'title',
          'description',
          'sectionList',
        ];
        if (
          classesProperties.every((propertie) => value.hasOwnProperty(propertie))
          && Object.keys(value).every((key) => (
            key === 'sectionList' ? (typeof value[key] === 'object') : (typeof value[key] === 'string')
          ))
        ) {
          const sectionList = value.sectionList;
          const sectionListProperties = [
            'main',
            'item',
            'link',
            'text',
          ];
          if (
            sectionListProperties.every((propertie) => sectionList.hasOwnProperty(propertie))
            && Object.keys(sectionList).every((key) => (typeof sectionList[key] === 'string'))
          ) result = true;
        };

        if (!result) console.warn(
`Prop "classes" should be
  {
    main: String,
    title: String,
    description: String,
    sectionList: {
      main: String,
      item: String,
      link: String,
      text: String.
    },
  }`
          );

        return result;
      }
    }
  },
}
</script>
