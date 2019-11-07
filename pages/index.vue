<template>
  <div>
    <h1>Events</h1>
    <EventCard v-for="(event, index) in events" :key="index" :event="event" :data-index="index" />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard'
import { mapState } from 'vuex'

export default {
  components: {
    EventCard
  },
  computed: mapState({
    events: state => state.events.events
  }),
  head() {
    // <-- property used by vue-meta to add header tags
    return {
      title: 'Event Listing' // <-- For our title tag
    }
  },
  // PROMISE -> THEN -> CATCH
  // asyncData({ $axios, error }) {
  //   return $axios
  //     .get('http://localhost:3000/events')
  //     .then(response => {
  //       return {
  //         events: response.data
  //       }
  //     })
  //     .catch(e => {
  //       error({
  //         statusCode: 503,
  //         message: 'Unable to fetch events at this time. Try later again.'
  //       })
  //     })
  // }
  // PROMISE ASYNC AWAIT TRY-CATCH
  async fetch({ store, error }) {
    try {
      await store.dispatch('events/fetchEvents')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time. Try later again.'
      })
    }
  }
}
</script>

<style>
</style>

