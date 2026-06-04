<script setup>
import { Icon } from '@iconify/vue'
import { profile } from '@/data/profile'

const contacts = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: 'lucide:mail' },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replaceAll(' ', '')}`, icon: 'lucide:phone' },
  { label: 'LinkedIn', value: 'linkedin.com/in/md-saiful', href: profile.linkedin, icon: 'lucide:linkedin' },
  { label: 'GitHub', value: 'github.com/mm-saiful6854', href: profile.github, icon: 'lucide:github' },
  { label: 'Location', value: profile.location, href: null, icon: 'lucide:map-pin' },
]
</script>

<template>
  <div class="contact-panel">
    <a v-for="contact in contacts" :key="contact.label" class="contact-row" :href="contact.href || undefined" :target="contact.href?.startsWith('http') ? '_blank' : undefined" rel="noreferrer">
      <Icon :icon="contact.icon" aria-hidden="true" />
      <span>
        <small>{{ contact.label }}</small>
        <strong>{{ contact.value }}</strong>
      </span>
    </a>
  </div>
</template>
