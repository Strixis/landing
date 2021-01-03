<template>
  <div>
    <span class="test">Hello</span>
    <img :src="photo" alt="photo">
  </div>
</template>

<script>
import photo from 'img/photo.jpg';

export default {
  data() {
    return {
      photo
    }
  }
}
</script>


<style lang="sass">
@use 'styles/variables'

.test
  color: variables.$red-color
</style>
