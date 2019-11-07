<template>
  <div>
    <h1>Create new Event</h1>
  </div>
</template>

<script>
export default {
  head() {
    // <-- property used by vue-meta to add header tags
    return {
      title: 'Create a New Event', // <-- For our title tag
      meta: [
        {
          hid: 'description',
          name: 'description', // <-- for our meta description tag
          content:
            'Here you can create a new Event with all features and details.'
        }
      ]
    }
  }
}
</script>

<style>
</style>