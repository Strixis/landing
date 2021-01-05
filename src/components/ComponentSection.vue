<template>
  <div :class="section.classes.main">
    <h2 :class="section.classes.title">{{ section.title }}</h2>
    <p :class="section.classes.description">{{ section.description }}</p>
    <ul :class="section.classes.sectionList.main">
      <li
        v-for="(item, index) of section.sectionList"
        :key="index"
        :class="section.classes.sectionList.item"
      >
        <a
          :href="item.link"
          :class="section.classes.sectionList.link"
        >
          {{ item.name }}
        </a>
        <span :class="section.classes.sectionList.text">
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
    }
  }
}
</script>
