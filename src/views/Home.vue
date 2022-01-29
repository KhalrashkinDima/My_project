<template>
  <div>
    <div v-for="post in postList" :key="post.id">
      <div class="container-fluid align-items-center pb-2">
        <div class="pt-2">
          <h4 class="text-center">
            {{ post.title }}
          </h4>
          <div class="text-center h5">
          </div>
          <img :src="post.url" class="d-block adv_pic img-fluid" />
        </div>
        <super-counter />
        <div class="justify-content-around d-flex">
        <button class="btn btn-primary" @click="DeletePost(post)">Удалить пост</button>
        <button class="btn btn-primary" @click="RedactPost">Редактировать пост</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ID: Number,
    };
  },
  computed: {
    postList() {
      return this.$store.getters["posts/GetPosts"];
    },
  },
  methods: {
    DeletePost(post) {
      console.log(post);
      const ID = post.id - 1;
      console.log(ID);
      this.$store.commit('posts/PostDelete', ID);
    }
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