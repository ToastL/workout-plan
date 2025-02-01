<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

import NotificationCenter from './components/NotificationCenter.vue';
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
  </div>

  <Navbar />
  <NotificationCenter />
  <NuxtPage />
  <Footer />
</template>
