<template>
  <nav>
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link>
  </nav>
  <div class="container mx-auto">
    <router-view/>
  </div>
</template>

<script>

import '@/assets/tailwind.css'

export default {

}
</script>
