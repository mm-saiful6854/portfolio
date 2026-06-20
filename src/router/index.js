import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Md Saiful Islam | Senior Software Engineer',
      description: 'Portfolio of Md Saiful Islam, a senior backend and cloud engineer.',
    },
  },
  {
    path: '/experience',
    name: 'experience',
    component: () => import('@/views/ExperienceView.vue'),
    meta: {
      title: 'Experience | Md Saiful Islam',
      description: 'Professional engineering experience in fintech, messaging, SMS gateways, and cloud-native systems.',
    },
  },
  {
    path: '/research',
    name: 'research',
    component: () => import('@/views/ResearchView.vue'),
    meta: {
      title: 'Research | Md Saiful Islam',
      description:
        'Research profile of Md Saiful Islam, including publications, Google Scholar, HCI, IoT, machine learning, and medical imaging interests.',
    },
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('@/views/ProjectsView.vue'),
    meta: {
      title: 'Projects | Md Saiful Islam',
      description: 'Selected projects across telephony, Go utilities, machine learning, graphics, and web applications.',
    },
  },
  {
    path: '/skills',
    name: 'skills',
    component: () => import('@/views/SkillsView.vue'),
    meta: {
      title: 'Skills | Md Saiful Islam',
      description: 'Java, Spring Boot, Vue 3, Kafka, Redis, PostgreSQL, Docker, Kubernetes, Linux, and data skills.',
    },
  },
  {
    path: '/achievements',
    name: 'achievements',
    component: () => import('@/views/AchievementsView.vue'),
    meta: {
      title: 'Achievements | Md Saiful Islam',
      description: 'Open source contributions, certifications, awards, education, and competitive programming achievements.',
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/ContactView.vue'),
    meta: {
      title: 'Contact | Md Saiful Islam',
      description: 'Contact details for Md Saiful Islam, senior software engineer in Dhaka, Bangladesh.',
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = to.meta.title || 'Md Saiful Islam'

  const description = document.querySelector('meta[name="description"]')
  if (description && to.meta.description) {
    description.setAttribute('content', to.meta.description)
  }
})

export default router
