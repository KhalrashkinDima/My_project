<template>
  <div>
    <div v-for="post in postList" :key="post.id">
      <div
        class="
          container-fluid
          align-items-center
          pb-2
          border-bottom border-danger
        "
      >
        <div class="pt-2">
          <h4 class="text-center">
            {{ post.title }}
          </h4>
          <div class="text-center h5"></div>
          <img :src="post.url" class="d-block adv_pic img-fluid" />
        </div>
        <div class="d-flex justify-content-between">
          <div class="text-center h5 pt-3">
            Рейтинг новости: {{ post.count }}
          </div>
          <!--  <div class="text-center pt-3">Дата поста: {{ post.date }}</div> -->
        </div>
        <div class="justify-content-around d-flex mt-4">
          <button
            class="btn btn-secondary"
            @click="PostDelete(post.id)"
            v-if="AdminTrue"
          >
            Удалить пост
          </button>
          <button
            class="btn btn-secondary"
            @click="$router.push('/' + post.id)"
            :id="post.id"
          >
            Просмотреть пост целиком
          </button>
        </div>
      </div>
    </div>
    <!--     <div class="m-2 text-center">
      <button class="btn btn-secondary" @click="doLoadPosts(true)">
        Загрузить посты
      </button>
    </div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    postList() {
      return this.$store.getters["posts/GetPosts"];
    },
    AdminTrue() {
      return this.$store.getters["users/isAdmin"];
    },
    AuthTrue() {
      return this.$store.getters["users/isAuth"];
    },
  },
  methods: {
    PostDelete(id) {
      const conf = confirm(
        "Вы точно уверены в том что желаете удалить данный пост?"
      );
      if (conf === true) {
        this.$store.dispatch("posts/deletePost", id);
      }
      return null;
    },
    /*     doLoadPosts(force) {
      this.$store.dispatch("posts/LoadPosts", { force });
    }, */
  },
  /*   created() {
    this.doLoadPosts(false);
  }, */
};
</script>

<style>
.rate_button {
  height: 50px;
  width: auto;
  border: 0;
  background-color: white;
}
.rate_image {
  width: 50px;
  height: auto;
}
</style>