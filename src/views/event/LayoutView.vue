<template>
<div>
  <router-view :event="event" />
  <nav>
    <router-link :to="{ name: 'EventDetails' }">Details</router-link> |
    <router-link :to="{ name: 'EventRegister' }">Register</router-link> |
    <router-link :to="{ name: 'EventEdit' }">Edit</router-link>
  </nav>
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
        if (!response.data[0]) {
          this.$router.push({
            name: '404Resource',
            params: { resource: 'event' }
          })
        }
        this.event = response.data[0]
      })
      .catch(error => {
        if (error.response && error.response === 404) {
          this.$router.push({
            name: '404Resource',
            params: { resource: 'event' }
          })
        } else {
          this.$router.push({
            name: 'NetworkError'
          })
        }
      })
  }
}
</script>
