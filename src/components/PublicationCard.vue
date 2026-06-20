<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  publication: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="publication-card">
    <div class="publication-meta">
      <span>{{ publication.year }}</span>
      <small>{{ publication.venue }}</small>
    </div>
    <h2>{{ publication.title }}</h2>
    <p>{{ publication.authors.join(', ') }}</p>
    <a v-if="publication.link" class="paper-link" :href="publication.link" target="_blank" rel="noreferrer">
      <Icon icon="lucide:external-link" aria-hidden="true" />
      Paper link
    </a>
    <span v-else class="paper-link unavailable">
      <Icon icon="lucide:link" aria-hidden="true" />
      Link ready to add
    </span>
  </article>
</template>
