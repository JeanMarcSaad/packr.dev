<template>
  <div class="home">
    <img src="@/assets/logo.png" class="packr-logo" />
    <div class="packr-text">
      <h1>Packr</h1>
      <p>The best tab manager you've never used</p>
    </div>
    <div class="chrome-div">
      <ChromeButton />
    </div>
    <div class="github-div">
      <a href="https://github.com/JeanMarcSaad/packr">
        <img src="@/assets/github.png" width="35" height="35" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ChromeButton from "@/components/ChromeButton.vue"; // @ is an alias to /src

@Options({
  components: {
    ChromeButton
  }
})
export default class Home extends Vue {}
</script>

<style scoped>
.home {
  position: relative;
  /* top: 4.5em; */
  width: 100%;
  height: 100%;

  display: grid;
  grid-column-gap: 2em;
}

.packr-logo {
  position: relative;
  margin: auto;
  width: 13em;
}

.packr-text {
  position: relative;
  top: -40px;
  color: #e3e3e3;
}

.packr-text h1 {
  /* position: relative; */
  /* top: -50px; */
  /* font-weight: medium; */
  font-size: 4em;
  /* font-size: 4.2em; */
}

.packr-text p {
  position: relative;
  top: -35px;
  font-size: 1.2em;
}

.chrome-div {
  position: relative;
  top: -45px;
}

.github-div {
  position: relative;
  /* top: -35px; */
}
</style>
