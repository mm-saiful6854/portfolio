<script setup>
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'
import { profile } from '@/data/profile'
</script>

<template>
  <section class="hero-section">
    <div class="hero-content">
      <p class="eyebrow">Senior backend and cloud engineer</p>
      <h1>{{ profile.name }}</h1>
      <p class="hero-summary">{{ profile.summary }}</p>

      <div class="hero-actions">
        <RouterLink class="button primary" to="/contact">
          <Icon icon="lucide:send" aria-hidden="true" />
          Contact
        </RouterLink>
        <a class="button secondary" :href="profile.resumeUrl" target="_blank" rel="noreferrer">
          <Icon icon="lucide:file-down" aria-hidden="true" />
          Resume
        </a>
      </div>
    </div>

    <div class="hero-visual">
      <figure class="portrait-card">
        <img :src="profile.imageUrl" alt="Portrait of Md Saiful Islam" width="1126" height="1124" />
      </figure>

      <aside class="hero-panel" aria-label="Engineering and research focus">
        <div>
          <span>Current focus</span>
          <strong>Cloud systems with research depth</strong>
        </div>
        <ul>
          <li v-for="area in profile.focusAreas" :key="area">
            <Icon icon="lucide:check-circle-2" aria-hidden="true" />
            {{ area }}
          </li>
        </ul>
      </aside>
    </div>
  </section>
</template>
