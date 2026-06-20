<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="timeline">
    <article v-for="item in items" :key="`${item.company}-${item.period}`" class="timeline-item">
      <div class="timeline-meta">
        <span>{{ item.period }}</span>
        <small>{{ item.location }}</small>
      </div>
      <div class="timeline-card">
        <p class="eyebrow">{{ item.domain }}</p>
        <h2>{{ item.role }}</h2>
        <h3><a :href="item.link" target="_blank" rel="noopener noreferrer">{{ item.company }}</a></h3>
        <ul>
          <li v-for="highlight in item.highlights" :key="highlight">{{ highlight }}</li>
        </ul>
        <div class="tag-list" aria-label="Technology stack">
          <span v-for="tech in item.stack" :key="tech">{{ tech }}</span>
        </div>
      </div>
    </article>
  </div>
</template>
