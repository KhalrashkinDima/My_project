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
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
      IdNumber: 3,
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
