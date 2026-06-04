<script setup>
import ExperienceTimeline from '@/components/ExperienceTimeline.vue'
import SectionHeader from '@/components/SectionHeader.vue'
import { experience } from '@/data/profile'
</script>

<template>
  <main class="page">
    <SectionHeader
      eyebrow="Experience"
      title="Engineering reliable services for fintech, messaging, and billing platforms."
      description="Recent roles emphasize distributed consistency, high-volume processing, integrations, and Linux-based production operations."
    />
    <ExperienceTimeline :items="experience" />
  </main>
</template>
