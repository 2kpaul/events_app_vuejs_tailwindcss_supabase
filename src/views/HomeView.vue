<template>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'

export default {
  name: 'HomeView',
  components: {
    EventCard
  },
  created() {
    this.$store.dispatch('fetchEvents')
  },
  computed: {
    events() {
      return this.$store.state.events
    }
  }
}
</script>
