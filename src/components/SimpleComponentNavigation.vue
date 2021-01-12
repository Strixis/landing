<template>
  <nav :class="classes.nav">
    <a v-for="(link, index) of links"
      :key="index"
      :href="link.link"
      :class="classes.link"
    >
      {{ link.name }}
    </a>
  </nav>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: true,
      validator: (value) => {
        let result = false;
        const linksProperties = [
          'name',
          'link'
        ];
        if (
          (value.length > 0)
          && value.every((link) => (
            linksProperties.every((propertie) => link.hasOwnProperty(propertie))
            && Object.values(link).every((linkValue) => (typeof linkValue === 'string'))
          ))
        ) result = true;

        if (!result) console.warn(
`Prop "navigation" should be
  {
    links: [
      {
        name: String,
        link: String
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
          'nav',
          'link',
        ];
        if (
          classesProperties.every((propertie) => value.hasOwnProperty(propertie))
          && Object.values(value).every((userValue) => (typeof userValue === 'string'))
        ) result = true;

        if (!result) console.warn(
`Prop "classes" should be
  {
    nav: String,
    link: String
  }`
        );
        
        return result;
      },
    },
  },
}
</script>
