<template>
  <Header />
  <main class="d-flex main_window">
    <LeftAdv />
    <router-view />
    <RightAdv />
  </main>
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import LeftAdv from "@/components/LeftAdv.vue";
import RightAdv from "@/components/RightAdv.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    LeftAdv,
    RightAdv,
    Footer,
  },
};
</script>

<style>
.main_window {
	list-style: none;
	text-decoration: none;
	font-family: sans-serif;
	margin: 0 auto;
  max-width: 1420px;
  padding-bottom: 50px;
 
}

a {
	text-decoration: none;
	color: black;
}

html{
  height: 100%;
  }

body {
  position: relative;
  min-height: 100%;
}
</style>
