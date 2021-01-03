<template>
  <nav class="navigation">
    <a v-for="(link, index) of links"
      :key="index"
      :href="link.link"
      class="naviagtion_link"
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
    },
  },
}
</script>
