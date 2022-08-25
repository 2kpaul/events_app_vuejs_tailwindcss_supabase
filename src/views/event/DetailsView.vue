<template>
  <div v-if="event" class="event">
    <h3>{{ event.title }}</h3>
    <p>{{ event.description }}</p>
    <span>@{{ event.time }} on {{ event.date }} @{{ event.location }}</span>
    <h4>by {{ event.organizer }}</h4>
  </div>
</template>

<script>

export default {
  props: ['event']
}
</script>
