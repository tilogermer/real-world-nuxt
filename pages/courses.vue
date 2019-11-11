<template>
  <div>
    <h1>Courses</h1>
    <CourseCard v-for="(course, index) in courses" :key="index" :course="course" :data-index="index" />
  </div>
</template>

<script>
import CourseCard from '@/components/CourseCard'
import { mapState } from 'vuex'

export default {
  components: {
    CourseCard
  },
  computed: mapState({
    courses: state => state.courses.courses
  }),
  head() {
    return {
      title: 'Course Listing' // <-- For our title tag
    }
  },
  async fetch({ store, error }) {
    try {
      await store.dispatch('courses/fetchCourses')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch courses at this time. Try later again.'
      })
    }
  }
}
</script>

<style>
</style>

