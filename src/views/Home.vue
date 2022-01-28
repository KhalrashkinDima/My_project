<template>
  <div>
    <div v-for="post in postList" :key="post.id">
      <div class="container-fluid align-items-center pb-2">
        <div class="pt-2">
          <h4 class="text-center">
            {{ post.title }}
          </h4>
          <img :src="post.src" class="d-block adv_pic img-fluid" />
          <div>
            Оценить новость
            <button @click="post.count--" class="rate_button">
              <img src="@/components/img/dislike.png" class="rate_image" />
            </button>
            {{ post.count }}
            <button @click="post.count++" class="rate_button">
              <img src="@/components/img/like.png" class="rate_image" />
            </button>
            <router-link :to="post.id">Читать новость целиком</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  computed: {
      postList() {
    return this.$store.getters.POSTS;
  },
  }
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