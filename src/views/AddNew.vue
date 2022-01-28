<template>
  <div class="col-md-8 col-lg-8 container-fluid pt-2">
    <div class="col-8 add_post text-light p-4">
      <form class="text-center">
        <div class="text-center">
          <div class="mt-4 text-center h5">Форма добавления поста</div>
          <input
            type="text"
            name="post name"
            placeholder="Наименование поста"
            required="required"
            class="text-center w-100 mt-4"
            v-model="title"
          />
          <input
            type="text"
            name="image"
            placeholder="Введите ссылку на изображение"
            required="required"
            class="text-center w-100 mt-4"
            v-model="src"
          />
          <input
            type="text"
            name="hashtag"
            placeholder="Введите теги"
            required="required"
            class="text-center w-100 mt-4"
          />
          <textarea
            class="form-control mt-4"
            name="main text"
            id="exampleFormControlTextarea1"
            rows="3"
            v-model="newsText"
            placeholder="Текст поста"
          ></textarea>
        </div>
        <button class="mt-4 btn btn-primary" @click="CreatePost">
          Опубликовать пост
        </button>
      </form>
    </div>
    <div class="text-center">Предварительный просмотр новости</div>
    <div class="container-fluid align-items-center">
      <div class="pt-2">
        <h4 class="text-center">
          {{ title }}
        </h4>
        <span class="text-center d-block">
          {{ newsText }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: "",
      title: "",
      newsText: "",
      count: "0",
      NewPostId: "",
    };
  },
  computed: {
    getCurrentId() {
      let NewPostId = this.$store.getters.GETID;
      return NewPostId;
    },
  },
  methods: {
    CreatePost() {
      this.$store.dispatch('SAVEPOST', {
        id: this.NewPostId,
        title: this.title,
        src: this.src,
        count: "0",
        newText: this.newsText,
      });
    },
  },
};
</script>
<style>
.inform {
  width: 100%;
  height: 200px;
}
.add_post {
  background: linear-gradient(to bottom, #3f5062, #747677);
  border-radius: 50px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
    0 4px 4px rgba(0, 0, 0, 0.11), 0 8px 8px rgba(0, 0, 0, 0.11),
    0 16px 16px rgba(0, 0, 0, 0.11), 0 32px 32px rgba(0, 0, 0, 0.11);
  border: 2px solid white;
}
</style>
