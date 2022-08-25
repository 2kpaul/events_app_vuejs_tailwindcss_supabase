<template>
  <div v-if="event" class="event">
    <p>edit event</p>
  </div>
</template>

<script>

export default {
  props: ['event']
}
</script>
