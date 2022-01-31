<template>
  <div>
    <div v-for="post in postList" :key="post.id">
      <div class="container-fluid align-items-center pb-2">
        <div class="pt-2">
          <h4 class="text-center">
            {{ post.title }}
          </h4>
          <div class="text-center h5"></div>
          <img :src="post.url" class="d-block adv_pic img-fluid" />
        </div>
        <super-counter />
        <div class="justify-content-around d-flex">
          <button class="btn btn-primary" @click="DeletePost(post)">
            Удалить пост
          </button>
          <button class="btn btn-primary" @click="PostById(post)" :id="post.id">
            Редактировать пост
          </button>
        </div>
      </div>
    </div>
    <modal-redact
      v-if="moduleRedactShown"
      @close="CloseRedact"
      v-bind:postRedact="PostId"
    />
  </div>
</template>
<script>
import ModalRedact from "../components/ModalRedact.vue";
export default {
  components: { ModalRedact },
  data() {
    return {
      ID: Number,
      moduleRedactShown: false,
      PostId: 1,
    };
  },
  computed: {
    postList() {
      return this.$store.getters["posts/GetPosts"];
    },
  },
  methods: {
    DeletePost(post) {
      const ID = post.id;
      this.$store.commit("posts/PostDelete", ID);
    },
    CloseRedact() {
      this.moduleRedactShown = false;
    },
    PostById(post) {
      this.PostId = post.id;
      this.moduleRedactShown = true;
      
    },
  },
  created() {
    this.$store.dispatch("posts/LoadPosts");
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