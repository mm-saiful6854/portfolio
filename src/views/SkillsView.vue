<script setup>
import SectionHeader from '@/components/SectionHeader.vue'
import SkillGroup from '@/components/SkillGroup.vue'
import { skillGroups } from '@/data/profile'
</script>

<template>
  <main class="page">
    <SectionHeader
      eyebrow="Skills"
      title="A stack shaped by production backend delivery."
      description="Core strengths are Java/Spring systems, distributed messaging, databases, containerized delivery, and practical Vue frontend work."
    />
    <div class="skills-grid">
      <SkillGroup v-for="group in skillGroups" :key="group.title" :group="group" />
    </div>
  </main>
</template>
