<template>
  <nav :class="navigation.class.nav">
    <a v-for="(link, index) of navigation.links"
      :key="index"
      :href="link.link"
      :class="navigation.class.link"
    >
      {{ link.name }}
    </a>
  </nav>
</template>

<script>
export default {
  props: {
    navigation: {
      type: Object,
      required: true,
      validator: (value) => {
        let result = false;
        if (value.hasOwnProperty('links')) {
          const links = value.links;
          if (
            Array.isArray(links)
            && (links.length > 0)
            && links.every((link) => (
              link.hasOwnProperty('name')
              && link.hasOwnProperty('link')
              && (typeof link.name === 'string')
              && (typeof link.link ==='string')
            ))
          ) result = true;
        };

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
    class: {
      nav: String,
      link: String
    }
  }`
        );

        return result;
      },
    },
  },
}
</script>
