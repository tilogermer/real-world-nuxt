<template>
  <nuxt-link :to="'/course/' + course.id">
    <div class="-shadow">
      <span class="eyebrow">@{{ course.date_start }} to {{ course.date_end }}</span>
      <h4 class="title">
        <img :src="course.imageUrl" class="avatar" />
        {{ course.title }}
      </h4>
      <h5>Level: {{course.level}}</h5>
      <p>Time: {{course.time}} min.</p>
      <p>Finished: {{course.finished}}</p>
    </div>
  </nuxt-link>
</template>
    <script>
export default {
  name: 'CourseCard',
  props: {
    course: Object
  },
  computed: {
    // parsedDate() {
    //   const eventDate = new Date(this.event.date)
    //   return eventDate.toDateString()
    // }
  }
}
</script>
    <style scoped>
div {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
div:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.title {
  margin: 0;
  color: black;
}
a {
  text-decoration: none;
}
.avatar {
  width: 60px;
  margin-right: 20px;
}
</style>
