<template>
  <div>
    <div v-for="(post, index) in postList" :key="post.id">
      <div class="container-fluid align-items-center pb-2">
        <div class="pt-2">
          <h4 class="text-center">
            {{ post.title }}
          </h4>
          <div class="text-center h5"></div>
          <img :src="post.url" class="d-block adv_pic img-fluid" />
        </div>
        <super-counter 
        v-if="AuthTrue"
        />
        <div class="justify-content-around d-flex mt-4">
          <button
            class="btn btn-primary"
            @click="DeletePost(index)"
            v-if="AdminTrue"
          >
            Удалить пост
          </button>
          <button
            class="btn btn-primary"
            @click="PostById(post)"
            :id="post.id"
            v-if="AdminTrue"
          >
            Редактировать пост
          </button>
          <button
            class="btn btn-primary"
            @click="$router.push('/' + post.id)"
            :id="post.id"
          >
            Просмотреть пост целиком
          </button>
        </div>
      </div>
    </div>
    <modal-redact
      v-if="moduleRedactShown"
      @close="CloseRedact"
      v-bind:postRedact="PostId"
    />
    <div class="m-2 text-center">
      <button class="btn btn-secondary" @click="doLoadPosts(true)">
        Загрузить посты
      </button>
    </div>
  </div>
</template>
<script>
import ModalRedact from "../components/ModalRedact.vue";
export default {
  components: { ModalRedact },
  data() {
    return {
      moduleRedactShown: false,
      PostId: 1,
    };
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
    DeletePost(index) {
      this.$store.commit("posts/PostDelete", index);
    },
    CloseRedact() {
      this.moduleRedactShown = false;
    },
    PostById(post) {
      this.PostId = post.id;
      this.moduleRedactShown = true;
    },
    doLoadPosts(force) {
      this.$store.dispatch("posts/LoadPosts", { force });
    },
  },
  created() {
    this.doLoadPosts(false);
  },
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