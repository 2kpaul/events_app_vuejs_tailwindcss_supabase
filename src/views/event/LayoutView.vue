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
export default {
  props: ['id'],
  created() {
    this.$store.dispatch('fetchEvent', this.id)
  },
  computed: {
    event() {
      return this.$store.state.event
    }
  }
}
</script>
