<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="achievement-list">
    <article v-for="item in items" :key="item.title" class="achievement-item">
      <h2>{{ item.title }}</h2>
      <ul>
        <li v-for="detail in item.details" :key="detail">{{ detail }}</li>
      </ul>
    </article>
  </div>
</template>
