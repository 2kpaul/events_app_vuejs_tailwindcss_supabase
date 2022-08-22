<template>
  <div v-if="event" class="event">
    <span>@{{ event.time }} on {{ event.date }} @{{ event.location }}</span>
    <h3>{{ event.title }}</h3>
    <p>{{ event.description }}</p>
    <h4>by {{ event.organizer }}</h4>
  </div>
</template>

<script>
import EventService from '@/services/EventService.js'
export default {
  props: ['id'],
  data() {
    return {
      event: null
    }
  },
  created() {
    EventService.getEvent(this.id)
      .then(response => {
        this.event = response.data[0]
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
