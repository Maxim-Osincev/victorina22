<template>
  <Header></Header>
  <Intro></Intro>
  <Info></Info>
  <News></News>
  <Footer></Footer>
</template>

<script>
import Header from '@/components/Header'
import Intro from "@/components/Intro";
import Info from "@/components/Info";
import News from "@/components/News";
import Footer from "@/components/Footer";
import './assets/styles/main.scss'

export default {
  name: 'App',
  components: {
    Header,
    Intro,
    Info,
    News,
    Footer,
  }
}
</script>

<style lang="scss">
$black: #49413E;
$orange: #FBC233;
$light-orange: #FED501;
$rose: #FF7A8A;
$blue: #9DE5F6;
$green: #78DBB1;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 16px;
    font-weight: 400;
  }

  color: $black;
}
a {
  color: $black;
}
input{
  font-family: Montserrat, PT Serif, serif;
  outline: none;
  border: none;
}
#app {
  font-family: Montserrat, PT Serif, serif;

  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
.container {
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
}

html,
body {
  width: 100%;
  height: 100%;
}
</style>
