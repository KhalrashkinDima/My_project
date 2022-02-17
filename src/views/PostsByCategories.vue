<template>
  <div>
    <div class="d-flex justify-content-between">
      <div class="text-center col-7">
        <div class="text-center pt-2 h5">Категории</div>
        <div class="row justify-content-around category_border">
          <button
            @click="postsByCategory('Политика')"
            class="btn btn-secondary col-10 col-md-6 col-lg-2 m-1"
          >
            Политика
          </button>
          <button
            @click="postsByCategory('Спорт')"
            class="btn btn-secondary col-10 col-md-6 col-lg-2 m-1"
          >
            Спорт
          </button>
          <button
            @click="postsByCategory('Юмор')"
            class="btn btn-secondary col-10 col-md-6 col-lg-2 m-1"
          >
            Юмор
          </button>
          <button
            @click="postsByCategory('Наука')"
            class="btn btn-secondary col-10 col-md-6 col-lg-2 m-1"
          >
            Наука
          </button>
        </div>
      </div>
      <div class="text-center col-4 align-self-center category_border">
        <div class="text-center pt-2 h5">Сортировать</div>
        <div class="row justify-content-around">
          <button @click="Newest()" class="btn btn-secondary col-10 col-md-5 m-1">Новые</button>
          <button @click="Best()" class="btn btn-secondary col-10 col-md-5 m-1">Лучшие</button>
        </div>
      </div>
    </div>
    <div v-for="post in postСategories" :key="post.id">
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
            <div class="text-center">{{ PostDate(post.date) }}</div>
            <div class="text-center">{{ post.category }}</div>
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
  </div>
</template>
<script>
import moment from "moment";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      postСategories: [],
    };
  },
  computed: {
    ...mapGetters({
      GetPostsByCategory: "posts/GetPostsByCategory",
    }),
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
    postsByCategory(val) {
      this.postСategories = this.GetPostsByCategory(val);
    },
    Newest() {
      const posts = this.postСategories;
      posts.sort((a, b) => {
        return b.date - a.date;
      });
      return posts;
    },
    Best() {
      const posts = this.postСategories;
      posts.sort((x, y) => {
        return y.count - x.count;
      });
      return posts;
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
  background-color: #ffffff;
}
.rate_image {
  width: 50px;
  height: auto;
}

</style>