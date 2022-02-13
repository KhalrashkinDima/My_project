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
          <img :src="post.url" class="d-block img-fluid" />
        </div>
        <div class="d-flex justify-content-between p-3">
          <div class="text-center h5 pt-3">
            Рейтинг новости: {{ post.count }}
          </div>
          <div class="pt-2">
           <div class="text-center"> {{ PostDate(post.date) }} </div>
           <div class="text-center"> {{ post.category }} </div>
          </div>
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
import moment from "moment";
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
    PostDate(date) {
      return moment(date).format("DD MM YYYY, h:mm:ss");
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