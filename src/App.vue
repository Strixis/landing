<template>
  <div class="container">
    <BlockHeader />
    <PageMain />
    <ComponentFooter />
  </div>
</template>

<script>
import BlockHeader from 'components/BlockHeader';
import PageMain from 'components/PageMain';
import ComponentFooter from 'components/ComponentFooter';

export default {
  components: {
    BlockHeader,
    PageMain,
    ComponentFooter,
  },
}
</script>

<style lang="sass">
@use 'styles'
</style>
