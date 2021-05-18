<template>
  <div id="app">
    <the-navbar></the-navbar>
    <the-header></the-header>
    <the-content></the-content>
  </div>
</template>

<script>
import TheNavbar from '../src/components/Layouts/TheNavbar.vue'
import TheHeader from '../src/components/Layouts/TheHeader.vue'
import TheContent from '../src/components/Layouts/TheContent.vue'

export default {
  name: 'App',
  components: {
    TheNavbar,
    TheHeader,
    TheContent,
  }
}
</script>

<style>
/* body{
  min-width: 1024px;
  min-height: 768px;
} */
@font-face{
  font-family: notosans-bold;
  src: url('./assets/Fonts/notosans-bold.3ede5aff.woff2');
}
@font-face {
  font-family: notosans-italic;
  src: url("./assets/Fonts/notosans-italic.1c1aaac9.woff2");
}
@font-face {
  font-family: notosans-regular;
  src: url("./assets/Fonts/notosans-regular.2cb88a13.woff2");
}
@font-face {
  font-family: notosans-semibold;
  src: url("./assets/Fonts/notosans-semibold.df3e6dc4.woff2");
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.icon-svg{
  background: url('./assets/Imgs/Sprites.64af8f61.svg') no-repeat;
  
}
</style>
