<template>
  <div class="blog">
    <div class="blog-title">
      {{ blog.title }}
    </div>
    <div class="blog-info" v-if="blog.date && blog.author">
      {{ blog.date }} . {{ blog.author }}
    </div>
    <div class="blog-content" v-html="blog.content"></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Blog, getBlog } from "@/api/blog-api";

@Options({
  props: {
    slug: String
  }
})
export default class BlogView extends Vue {
  slug!: string;
  blog: Blog = {
    title: "",
    author: "",
    slug: "",
    date: "",
    content: ""
  };

  created() {
    getBlog(this.slug).then(blog => {
      this.blog = blog;
    });
  }
}
</script>

<style scoped>
.blog {
  position: absolute;
  left: 0px;
  top: 60px;

  width: 100%;
  height: 90%;

  overflow: scroll;

  border-radius: 25px;
  color: #e3e3e3;

  padding-top: 30px;
  padding-bottom: 30px;

  color: #292929;
  background-color: #fcfcfc;
}

.blog-title {
  font-size: 3.6vh;
  font-weight: bold;
}

.blog-info {
  margin-top: 1vh;
  font-size: 2.2vh;
}

.blog-content {
  width: 60%;
  margin-top: 5vh;
  margin-left: auto;
  margin-right: auto;

  text-align: left;
  line-height: 5vh;
}

@media only screen and (max-width: 1025px) {
  .blog-content {
    width: 90%;
  }
}
</style>
