<template>
  <router-link
      class="event-card"
      :to="{ name: 'EventDetails', params: { id: event.id } }"
    >
    <div>
      <span>@{{ event.time }} on {{ event.date }} </span>
      <h3>{{ event.title }}</h3>
      <h4>@{{ event.location }}</h4>
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
