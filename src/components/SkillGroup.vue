<script setup>
defineProps({
  group: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="skill-group">
    <h2>{{ group.title }}</h2>
    <div class="tag-list large">
      <span v-for="skill in group.skills" :key="skill">{{ skill }}</span>
    </div>
  </article>
</template>
