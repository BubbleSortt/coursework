<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  }
};
</script>

<style lang="scss">

html {
  min-height: 100vh;
}

body {
  min-height: 100vh;
}

#app {
  font-family: "Josefin Sans", sans-serif;
  background: $main-bg;
  color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
}

.header + * {
  padding-bottom: 20px;
}
</style>
