<template>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService'

export default {
  name: 'HomeView',
  components: {
    EventCard
  },
  data() {
    return {
      events: null
    }
  },
  created() {
    EventService
      .getEvents()
      .then(response => {
        if (!response.data) {
          this.$router.push({
            name: 'NetworkError'
          })
        }
        this.events = response.data
      })
      .catch(error => {
        console.log(error)
        this.$router.push({
          name: 'NetworkError'
        })
      })
  }
}
</script>
