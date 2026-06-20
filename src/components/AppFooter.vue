<script setup>
import { Icon } from '@iconify/vue'
import { profile } from '@/data/profile'
</script>

<template>
  <footer class="site-footer">
    <p>Built for production-minded engineering conversations.</p>
    <div class="footer-links">
      <a :href="profile.github" target="_blank" rel="noreferrer" aria-label="GitHub profile">
        <Icon icon="lucide:github" aria-hidden="true" />
      </a>
      <a :href="profile.linkedin" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
        <Icon icon="lucide:linkedin" aria-hidden="true" />
      </a>
      <a :href="profile.googleScholar" target="_blank" rel="noreferrer" aria-label="Google Scholar profile">
        <Icon icon="simple-icons:googlescholar" aria-hidden="true" />
      </a>
      <a :href="`mailto:${profile.email}`" aria-label="Send email">
        <Icon icon="lucide:mail" aria-hidden="true" />
      </a>
    </div>
  </footer>
</template>
