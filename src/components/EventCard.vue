<template>
  <router-link
      class="event-card"
      :to="{ name: 'EventDetails', params: { id: event.id } }"
    >
    <div>
      <span>@{{ event.time }} on {{ event.date }} @{{ event.location }}</span>
      <h3>{{ event.title }}</h3>
      <h4>by {{ event.organizer }}</h4>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>
