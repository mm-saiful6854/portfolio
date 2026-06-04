<script setup>
import ProjectCard from '@/components/ProjectCard.vue'
import SectionHeader from '@/components/SectionHeader.vue'
import { projects } from '@/data/profile'
</script>

<template>
  <main class="page">
    <SectionHeader
      eyebrow="Projects"
      title="Project work with a practical engineering range."
      description="A mix of telecom systems, developer utilities, machine learning, graphics programming, and full-stack web applications."
    />
    <div class="project-grid">
      <ProjectCard v-for="project in projects" :key="project.title" :project="project" />
    </div>
  </main>
</template>
