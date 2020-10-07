<template>
  <div class="blog-entry">
    <div class="blog-header">
      <div class="blog-title">
        {{ blog.title }}
      </div>
      <div class="blog-info">{{ blog.date }} . {{ blog.author }}</div>
    </div>
    <div class="blog-content">
      <div class="blog-preview" v-html="blog.content"></div>
    </div>
    <div class="blog-readmore" @click="openBlog">
      Read More
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Blog } from "@/api/blog-api";
import router from "../router";

@Options({
  props: {
    blog: Object
  }
})
export default class BlogEntry extends Vue {
  blog!: Blog;

  openBlog() {
    router.push({ path: `/blog/${this.blog.slug}` });
  }
}
</script>

<style scoped>
.blog-entry {
  display: block;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2%;
  width: 48%;
  height: 100%;
  max-height: 48vh;

  background-color: #fcfcfc;
  border-radius: 15px;

  color: #292929;
}

@media only screen and (max-width: 1025px) {
  .blog-entry {
    width: 80%;
    max-height: 50vh;
  }
}

.blog-header {
  position: relative;
  top: 10%;
  /* left: 18%; */
  /* text-align: left; */

  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 95%;
}

.blog-title {
  font-size: 3.6vh;
  /* font-size: 2.2vh; */
  font-weight: bold;
}

.blog-info {
  font-size: 2.1vh;
}

.blog-content {
  position: relative;
  top: 12%;

  overflow: hidden;
  /* line-height: 16px;  */
  word-wrap: break-word;

  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 75%;
  height: 50%;
}

.blog-content::after {
  content: "...";
}

.blog-preview {
  font-size: 2.1vh;
  text-align: left;
}

.blog-readmore {
  position: relative;
  top: 7.2vh;
  /* top: 20%; */
  width: 35%;
  height: 5.5vh;

  margin-top: 2%;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #050505;
  border-radius: 10px;

  color: #fcfcfc;
  font-size: 2.2vh;
  font-weight: bold;

  user-select: none;
  cursor: pointer;
}

.blog-readmore:active {
  background-color: #292929;
}
</style>
