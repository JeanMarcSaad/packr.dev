<template>
  <div>
    <div id="nav">
      <router-link to="/">home</router-link>
      <router-link to="/blog">blog</router-link>
    </div>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style>
html {
  min-height: 100%;
}

html,
body {
  width: 100%;
  margin: 0;
}

body {
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background: linear-gradient(180deg, #050505 0%, #171717 100%);
}

#app {
  font-family: Helvetica, "Helvetica-Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
}

#nav {
  position: absolute;
  top: 8px;
  left: -20px;

  height: 30px;
  width: 100%;
  padding: 10px;

  /* background-color: rgba(255, 255, 255, 0.05); */

  text-align: right;
  font-size: 1.35em;
  color: aliceblue;
}

#nav a {
  font-weight: 500;
  color: aliceblue;
  margin-right: 1em;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  text-decoration: underline;
}

img {
  max-width: 100%;
  height: auto;
}
</style>
