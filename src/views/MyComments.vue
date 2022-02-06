<template>
  <div class="comments_form">
        <div v-if="comments.length < 1" class="mt-4 text-center"><h4>У вас еще нет комментариев</h4>          <button
            class="btn btn-secondary"
            @click="$router.push('/')"
          >
            Выберите пост и оставьте свой комментарий
          </button></div>
    <div v-for="mycomment in comments" :key="mycomment.id">
      <div class="container-fluid align-items-center pb-2 my_form mt-4">
        <div class="d-flex justify-content-between self-items-center pt-2 align-items-center">
          <div class="text-center my_author col-4 align-items-center">
            {{ mycomment.authorName }}
          </div>
          <div class="text-center col-8 my_author">
            {{ mycomment.commentText }}
          </div>
        </div>
        <div class="justify-content-around d-flex mt-1">
          <button
            class="btn btn-secondary"
            @click="checkPost(mycomment.postId)"
          >
            Перейти к посту
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      comments: [],
    };
  },
  computed: {
    ...mapGetters({
      GetMyComments: "comments/GetMyComments",
      PostIsDead: "posts/PostIsDead",
    }),
    AdminTrue() {
      return this.$store.getters["users/isAdmin"];
    },
    AuthTrue() {
      return this.$store.getters["users/isAuth"];
    },
    WhatYourName() {
      return this.$store.getters["users/ReturnName"];
    },
  },
  methods: {
  checkPost(id) {
    const PostIsDead = this.PostIsDead(id);
    if (PostIsDead.length < 1) {
      alert('Извините, пост удален');
      return null;
    }
    this.$router.push("/" + id);
  }
  },
  created() {
    this.comments = this.GetMyComments(this.WhatYourName);
  },
  
  /*     doLoadPosts(force) {
      this.$store.dispatch("posts/LoadPosts", { force });
    }, */
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
.my_form {
  border: 2px solid #3f5062;
  border-radius: 5px;
}
.my_author {
  border: 2px solid #3f5062;
  border-radius: 5px;
}
.comments_form {
  width: 100%;
}
</style>