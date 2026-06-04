<script setup>
import AchievementList from '@/components/AchievementList.vue'
import SectionHeader from '@/components/SectionHeader.vue'
import { achievements, education } from '@/data/profile'
</script>

<template>
  <main class="page">
    <SectionHeader
      eyebrow="Achievements"
      title="Open source, certifications, awards, and competitive foundations."
      description="The academic and competitive programming background supports the production engineering experience."
    />

    <section class="education-card">
      <p class="eyebrow">Education</p>
      <h2>{{ education.institution }}</h2>
      <p>{{ education.degree }} - {{ education.result }}</p>
      <span>{{ education.period }} | {{ education.location }}</span>
    </section>

    <AchievementList :items="achievements" />
  </main>
</template>
