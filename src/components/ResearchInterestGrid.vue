<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  interests: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="research-interest-grid">
    <article v-for="interest in interests" :key="interest" class="research-interest">
      <Icon icon="lucide:microscope" aria-hidden="true" />
      <span>{{ interest }}</span>
    </article>
  </div>
</template>
