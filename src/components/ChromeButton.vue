<template>
  <div class="chrome-button" @click="openStore">
    <p>Get it now on <strong>Chrome</strong></p>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class ChromeButton extends Vue {
  packrExtensionUrl = "https://chrome.google.com/webstore/detail/packr/gnnlocmolfemmglhmnaocjiiecnpapph";

  openStore() {
    window.open(this.packrExtensionUrl, "_blank");
  }
}
</script>

<style scoped>
.chrome-button {
  display: flex;
  align-items: center;
  justify-content: center;

  user-select: none;

  width: 350px;
  height: 50px;
  margin: auto;

  border-radius: 20px;
  background-color: #edebeb;

  font-weight: 500;
  font-size: 1.3em;

  transition: background-color 0.2s ease-in;
}

.bold {
  font-weight: bold;
}

.chrome-button:hover {
  color: #292929;
  background-color: #d9d9d9;
}

.chrome-button:active {
  color: #292929;
  background-color: #979797;
}
</style>
