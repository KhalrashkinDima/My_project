<template>
  <div>
    <div class="container-fluid align-items-center">
      <div class="pt-2 pb-2">
        <h4 class="text-center">
          {{ postById.title }}
        </h4>
        <img :src="postById.src" class="d-block adv_pic img-fluid" />
        <span>
          {{ postById.newText }}
        </span>
        <div>
          Оценить новость
          <button @click="postById.count--" class="rate_button">
            <img src="@/components/img/dislike.png" class="rate_image" />
          </button>
          {{ postById.count }}
          <button @click="postById.count++" class="rate_button">
            <img src="@/components/img/like.png" class="rate_image" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
      show: false,
    };
  },
/*   computed: {
    CreateNumber() {
      const ID = this.$route.params.id ;
      return ID;
    },
    postById() {
      console.log(this.$store.getters['Posts/GetPostById'(ID)]);
      return this.$store.getters['Posts/GetPostById(ID)'];
    }, */
/*   },
  methods: {
    Inc() {
      this.$store.commit("IncLikes");
    },
    Dec() {
      this.$store.commit("DecLikes");
    }, */
 /*  }, */
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
