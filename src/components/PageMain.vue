<template>
  <main class="main">
    <BlockAboutMe />
    <ComponentSection />
    <ComponentSection />
  </main>
</template>

<script>
import BlockAboutMe from 'components/BlockAboutMe';
import ComponentSection from 'components/ComponentSection';

export default {
  components: {
    BlockAboutMe,
    ComponentSection,
  },
}
</script>
