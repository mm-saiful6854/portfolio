<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue'
import { profile } from '@/data/profile'

const menuOpen = ref(false)

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <header class="site-header">
    <RouterLink class="brand" to="/" aria-label="Md Saiful Islam home" @click="closeMenu">
      <span class="brand-mark">SI</span>
      <span>
        <strong>{{ profile.name }}</strong>
        <small>{{ profile.role }}</small>
      </span>
    </RouterLink>

    <button class="nav-toggle" type="button" :aria-expanded="menuOpen" aria-label="Toggle navigation" @click="menuOpen = !menuOpen">
      <Icon icon="lucide:menu" aria-hidden="true" />
    </button>

    <nav :class="{ open: menuOpen }" aria-label="Primary navigation">
      <RouterLink v-for="item in profile.navigation" :key="item.to" :to="item.to" @click="closeMenu">
        {{ item.label }}
      </RouterLink>
    </nav>
  </header>
</template>
