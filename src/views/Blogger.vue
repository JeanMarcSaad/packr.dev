<template>
  <div class="blogger">
    <div
      v-if="blogs.length == 0"
      class="loader-container"
    >
      <div class="loader" />
    </div>
    <BlogEntry v-for="(blog, key) in blogs" :key="key" :blog="blog" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Blog, getBlogs } from "@/api/blog-api";
import BlogEntry from "@/components/BlogEntry.vue"; // @ is an alias to /src

@Options({
  components: {
    BlogEntry
  }
})
export default class Blogger extends Vue {
  blogs: Blog[] = [];

  created() {
    getBlogs().then(_blogs => {
      this.blogs = _blogs;
    });
  }
}
</script>

<style scoped>
/* .side {
  position: absolute;
  left: 5px;
  top: 60px;
  width: 260px;
  height: 100%;
  background-color: blue;
  z-index: 1;
} */

.loader-container {
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
}

.loader {
    border: 2px solid #CECECE;
    border-top-color: #df68d5;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    animation: spin 1s infinite;
}

@keyframes spin{
    from{transform: rotate(0deg);}
    to{transform: rotate(360deg);}
}

.blogger {
  position: absolute;
  left: 0px;
  top: 60px;

  width: 100%;
  height: 90%;

  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  overflow: scroll;

  border-radius: 25px;
  /* background-color: rgba(255, 255, 255, 0.35); */
  /* background-color: rgba(220, 220, 220, 0.15); */
  color: #e3e3e3;

  padding-top: 30px;
  padding-bottom: 30px;
}
</style>
