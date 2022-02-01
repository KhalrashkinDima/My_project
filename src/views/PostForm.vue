<template>
  <div>
    <div class="container-fluid align-items-center">
      <div class="pt-2 pb-2">
        <h4 class="text-center">
          {{ ThisPost.title }}
        </h4>
        <span>
          <img :src="ThisPost.url" class="d-block adv_pic img-fluid" />
        </span>
        Оценить новость
        <button @click="Dec" class="rate_button">
          <img src="@/components/img/dislike.png" class="rate_image" />
        </button>
        <button @click="Inc" class="rate_button">
          <img src="@/components/img/like.png" class="rate_image" />
        </button>
        <div class="h5" id="Comment">
          <img
            src="@/components/img/comment.png"
            class="comments img-fluid"
            @click="show = !show"
          />
          <transition>
            <div class="comments" v-if="show">
              <div class="comment d-flex align-items-center" id="1"></div>
              <!-- {{CommentList.body}} -->
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      IdNumber: 3,
      show: false,
    };
  },
  computed: {
    CreateNumber() {
      const IdNumber = this.$route.params.id;
      return IdNumber;
    },
    ThisPost(IdNumber) {
      const PostToRead = this.$store.getters["posts/GetPostById"];
      return PostToRead(this.IdNumber);
    },
/*     CommentList(IdNumber) {
      const Comm = this.$store.getters["comments/GetCommById"];
      return Comm(this.IdNumber);
    },
    doLoadComments() {
    this.$store.dispatch("comments/LoadComments");
    }, */
  },
  methods: {
  },

};
</script>
<style>
.comments {
  max-height: 80px;
}
.user_icon {
  max-height: 50px;
}
</style>
