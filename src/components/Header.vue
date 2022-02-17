<template>
  <div class="container-fluid upp pt-1 pb-1 header_top">
    <header class="pt-2 ps-2 d-flex container-fluid">
      <div class="col-md-4 col-lg-2 align-self-center">
        <router-link to="/" class="site_logo"
          ><img src="@/components/img/logo.png" class="d-block w-100 logo"
        /></router-link>
      </div>
      <div class="col-md-4 col-lg-7 justify-content-between align-self-center">
        <nav class="navbar navbar-expand-lg navbar-dark nav_backround">
          <div class="container-fluid d-flex justify-content-around">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <div class="navbar-nav text-center align-items-center">
                <router-link
                  to="/"
                  class="fw-bold text-light h5 upp_nav nav-item me-lg-4 me-xl-5"
                  >Главная</router-link
                >
                <router-link
                  to="/Best"
                  class="fw-bold text-light h5 upp_nav nav-item me-lg-4 me-xl-5"
                  >Лучшее</router-link
                >
                <router-link
                  to="/AddNew"
                  class="fw-bold text-light h5 upp_nav nav-item me-lg-4 me-xl-5"
                  >Добавить новость</router-link
                >
                <router-link
                  to="/PostsByCategories"
                  class="fw-bold text-light h5 upp_nav nav-item me-lg-4 me-xl-5"
                  >Категории</router-link
                >
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div class="col-1 align-self-center">
        <img
          src="@/components/img/profile_icon.png"
          class="d-block profile_icon img-fluid"
          @click="ProfileInform"
          v-if="AuthTrue"
        />
        <router-link to="/RegistrationForm" v-else>
          <img
            src="@/components/img/profile_icon.png"
            class="d-block profile_icon img-fluid"
        /></router-link>
      </div>
      <div
        class="col-md-2 col-lg-2 align-self-center text-center"
        v-if="AuthTrue"
      >
        <div class="fw-bold text-light h5 upp_nav" @click="Loginout">Выйти</div>
      </div>
      <div class="col-md-2 col-lg-2 align-self-center" v-else>
        <div class="pt-2 background-down background-primary text-center">
          <router-link to="/Verification" class="fw-bold text-light h5 upp_nav"
            >Войти</router-link
          >
        </div>
        <div class="text-center">
          <router-link
            to="/RegistrationForm"
            class="fw-bold text-light h5 upp_nav"
            >Регистрация</router-link
          >
        </div>
      </div>
    </header>
  </div>
  <modal-profile v-if="modulewindowShown" @close="ProfileClose" />
</template>

<script>
export default {
  data() {
    return {
      modulewindowShown: false,
    };
  },
  methods: {
    ProfileInform() {
      this.modulewindowShown = true;
    },
    ProfileClose() {
      this.modulewindowShown = false;
    },
    Loginout() {
      this.$store.dispatch("users/logout");
    },
  },
  computed: {
    AuthTrue() {
      return this.$store.getters["users/isAuth"];
    },
    AdminTrue() {
      return this.$store.getters["users/isAdmin"];
    },
  },
};
</script>

<style>
.logo {
  max-width: 220px;
  height: auto;
}
.upp_nav {
  text-decoration: none;
  cursor:pointer;
}
header {
  max-width: 1420px;
}
.upp {
  width: 100% !important;
  box-sizing: border-box;
  margin: 0 auto;
}
.header_top {
  background: linear-gradient(#747677, #3f5062);
}
.profile_icon {
  width: 80px;
  height: auto;
}
.profile_icon:hover {
  transform: scale(1.5);
  transition: all 0.2s linear;
}
a.router-link-active {
  color: #03d6f7 !important;
}
.sidebar_button {
  position: absolute;
  top: 20%;
}
</style>
