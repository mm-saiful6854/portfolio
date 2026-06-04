<script setup>
import { Icon } from '@iconify/vue'
import ContactPanel from '@/components/ContactPanel.vue'
import SectionHeader from '@/components/SectionHeader.vue'
import { profile } from '@/data/profile'
</script>

<template>
  <main class="page contact-page">
    <SectionHeader
      eyebrow="Contact"
      title="Let's talk about backend systems, fintech platforms, and cloud delivery."
      description="Available for professional conversations around Java/Spring, distributed systems, and production platform work."
    />

    <div class="contact-layout">
      <ContactPanel />
      <aside class="contact-note">
        <Icon icon="lucide:message-square" aria-hidden="true" />
        <h2>Best way to reach me</h2>
        <p>Email is the fastest channel for detailed technical conversations. LinkedIn works well for introductions and role discussions.</p>
        <a class="button primary" :href="`mailto:${profile.email}`">
          <Icon icon="lucide:mail" aria-hidden="true" />
          Send email
        </a>
      </aside>
    </div>
  </main>
</template>
