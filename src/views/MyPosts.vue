<template>
  <div>
    <div v-if="posts.length < 1" class="mt-4">
      <h4>У вас еще нет постов</h4>
      <button class="btn btn-secondary" @click="$router.push('/AddNew')">
        Напишите свой первый пост
      </button>
    </div>
    <div v-for="mypost in posts" :key="mypost.id">
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
            {{ mypost.title }}
          </h4>
          <div class="text-center h5"></div>
          <img :src="mypost.url" class="d-block img-fluid" />
        </div>
        <div class="d-flex justify-content-between p-3">
          <div class="text-center h5 pt-3">
            Рейтинг новости: {{ mypost.count }}
          </div>
          <div class="pt-2">
            <div class="text-center">{{ PostDate(mypost.date) }}</div>
            <div class="text-center">{{ mypost.category }}</div>
          </div>
        </div>
        <div class="justify-content-around d-flex mt-4">
          <button
            class="btn btn-secondary"
            @click="PostDelete(mypost.id)"
            v-if="AdminTrue"
          >
            Удалить пост
          </button>
          <button
            class="btn btn-secondary"
            @click="$router.push('/' + mypost.id)"
            :id="mypost.id"
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
import { mapGetters } from "vuex";
import moment from "moment";
export default {
  data() {
    return {
      posts: [],
    };
  },
  computed: {
    ...mapGetters({
      GetMyPosts: "posts/GetMyPosts",
    }),
    AdminTrue() {
      return this.$store.getters["users/isAdmin"];
    },
    AuthTrue() {
      return this.$store.getters["users/isAuth"];
    },
    MyUid() {
      const User = this.$store.getters["users/ReturnUid"];
      return User;
    },
  },
  created() {
    this.posts = this.GetMyPosts(this.MyUid);
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
.comment_form {
  background: linear-gradient(#747677, #3f5062);
  border-radius: 10px;
}
.comment_author {
  border: 2px solid #3f5062;
  border-radius: 5px;
}
</style>