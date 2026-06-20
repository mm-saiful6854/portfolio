<script setup>
import { Icon } from '@iconify/vue'
import PublicationCard from '@/components/PublicationCard.vue'
import ResearchInterestGrid from '@/components/ResearchInterestGrid.vue'
import SectionHeader from '@/components/SectionHeader.vue'
import { profile, publications, researchInterests } from '@/data/profile'
</script>

<template>
  <main class="page research-page">
    <section class="research-intro">
      <SectionHeader
        eyebrow="Research"
        title="Higher-study profile across HCI, IoT, machine learning, and software engineering."
        :description="profile.higherStudySummary"
      />
      <a class="button primary" :href="profile.googleScholar" target="_blank" rel="noreferrer">
        <Icon icon="simple-icons:googlescholar" aria-hidden="true" />
        Google Scholar
      </a>
    </section>

    <section class="research-section">
      <SectionHeader
        eyebrow="Interests"
        title="Research areas shaped by assistive systems and applied computing."
      />
      <ResearchInterestGrid :interests="researchInterests" />
    </section>

    <section class="research-section">
      <SectionHeader
        eyebrow="Publications"
        title="Published work in gesture control, assistive technology, and deep learning."
        description="Paper URL fields are ready in the data file and can be updated when exact publication links are finalized."
      />
      <div class="publication-grid">
        <PublicationCard v-for="publication in publications" :key="publication.title" :publication="publication" />
      </div>
    </section>
  </main>
</template>
