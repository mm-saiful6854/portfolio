<script setup>
import { RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue'
import HeroSection from '@/components/HeroSection.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import ResearchInterestGrid from '@/components/ResearchInterestGrid.vue'
import SectionHeader from '@/components/SectionHeader.vue'
import SkillGroup from '@/components/SkillGroup.vue'
import { experience, profile, projects, researchInterests, skillGroups } from '@/data/profile'
</script>

<template>
  <main>
    <HeroSection />

    <section class="section surface">
      <div class="metric-grid">
        <article v-for="metric in profile.metrics" :key="metric.label" class="metric-card">
          <strong>{{ metric.value }}</strong>
          <span>{{ metric.label }}</span>
        </article>
      </div>
    </section>

    <section class="section split-section">
      <SectionHeader
        eyebrow="Current profile"
        title="Production systems, distributed workflows, and cloud delivery."
        description="Saiful's work centers on high-availability backend services for fintech, messaging, billing, and customer platforms."
      />
      <div class="insight-list">
        <article v-for="item in experience" :key="item.company">
          <Icon icon="lucide:server-cog" aria-hidden="true" />
          <div>
            <h2>{{ item.company }}</h2>
            <p>{{ item.domain }} - {{ item.period }}</p>
          </div>
        </article>
      </div>
    </section>

    <section class="section">
      <SectionHeader
        eyebrow="Selected skills"
        title="Backend depth with practical frontend delivery."
        description="The portfolio highlights the same stack used in production: Spring Boot, Vue 3, Kafka, Redis, PostgreSQL, Docker, Kubernetes, and Linux."
      />
      <div class="skills-grid compact">
        <SkillGroup v-for="group in skillGroups.slice(0, 3)" :key="group.title" :group="group" />
      </div>
    </section>

    <section class="section">
      <SectionHeader
        eyebrow="Research profile"
        title="Higher-study interests grounded in applied computing."
        :description="profile.higherStudySummary"
      />
      <ResearchInterestGrid :interests="researchInterests.slice(0, 4)" />
      <RouterLink class="button secondary section-action" to="/research">
        <Icon icon="lucide:arrow-right" aria-hidden="true" />
        View research profile
      </RouterLink>
    </section>

    <section class="section surface">
      <SectionHeader
        eyebrow="Projects"
        title="Hands-on work across telephony, data, ML, games, and full-stack apps."
      />
      <div class="project-grid">
        <ProjectCard v-for="project in projects.slice(0, 3)" :key="project.title" :project="project" />
      </div>
      <RouterLink class="button secondary section-action" to="/projects">
        <Icon icon="lucide:arrow-right" aria-hidden="true" />
        View all projects
      </RouterLink>
    </section>
  </main>
</template>
