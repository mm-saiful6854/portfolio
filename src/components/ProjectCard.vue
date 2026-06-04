<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="project-card">
    <p class="eyebrow">{{ project.type }}</p>
    <h2>{{ project.title }}</h2>
    <p>{{ project.description }}</p>
    <div class="tag-list">
      <span v-for="tech in project.stack" :key="tech">{{ tech }}</span>
    </div>
  </article>
</template>
