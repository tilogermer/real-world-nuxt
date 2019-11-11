<template>
  <div>
    <div class="event-header">
      <span class="eyebrow">@{{ course.date_start }} until {{ course.date_end }}</span>
      <h1 class="title">{{ course.title }}</h1>
      <h5>Level {{ course.level }}</h5>
      <h5>Time: {{ course.time }}</h5>
      <p>Lessons: {{course.lessons}}</p>
      <p>Finished: {{course.finished}}</p>
    </div>

    <h2>Course details</h2>
    <p>{{ course.description }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  head() {
    // <-- property used by vue-meta to add header tags
    return {
      title: 'Course #' + this.course.title, // <-- For our title tag
      meta: [
        {
          hid: 'description',
          name: 'description', // <-- for our meta description tag
          content:
            'What you need to know about this Vuemastery Course' +
            this.course.title
        }
      ]
    }
  },
  async fetch({ store, error, params }) {
    try {
      await store.dispatch('courses/fetchCourse', params.id)
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch course # ' + params.id
      })
    }
  },
  computed: mapState({
    course: state => state.courses.course
  })
}
</script>

<style>
.prompt-box {
  position: relative;
  overflow: hidden;
  padding: 1em;
  margin-bottom: 24px;
  transform: scaleY(1);
}
.prompt-box > .title {
  margin: 0 0 0.5em;
}
.prompt-box > .title > .meta {
  margin-left: 10px;
}
.prompt-box > .actions {
  display: flex;
  align-items: center;
}
.prompt-box > button {
  margin-right: 0.5em;
}
.prompt-box > button:last-of-type {
  margin-right: 0;
}
.location {
  margin-bottom: 0;
}
.location > .icon {
  margin-left: 10px;
}
.event-header > .title {
  margin: 0;
}
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}
</style>