<template>
  <div>
    <h1>{{ resource }} not found</h1>
  </div>
</template>

<script>
export default {
  props: {
    resource: {
      type: String,
      required: true,
      default: 'page'
    }
  }
}
</script>
