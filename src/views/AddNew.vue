<template>
  <div class="col-md-8 col-lg-8 container-fluid pt-2">
    <div class="col-11 add_post text-light p-4">
      <form class="text-center">
        <div class="text-center">
          <div class="mt-4 text-center h5">Форма добавления поста</div>

          <my-input label="Заголовок поста" v-model="title" />
          <my-input label="Введите ссылку на изображение" v-model="url" />
          <choose-from-many
            v-model="value"
             v-bind:options="categories"
            question="Выберите категорию новости :"
            class="pt-2"
          />
          <div class="pt-2">Введите основной текст</div>
          <textarea
            class="form-control mt-3"
            name="main text"
            id="exampleFormControlTextarea1"
            rows="10"
            v-model="newsText"
            placeholder="Текст поста"
          ></textarea>
        </div>
        <button class="mt-4 btn btn-primary" @click="CreatePost">
          Опубликовать пост
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import MyInput from "../components/ui/MyInput.vue";
export default {
  components: { MyInput },
  data() {
    return {
      url: "",
      title: "",
      count: 0,
      newsText: "",
      authorUid: "",
      date: "",
      categories: [
        { text: "Политика", value: "Политика" },
        { text: "Юмор", value: "Юмор" },
        { text: "Спорт", value: "Спорт" },
        { text: "Наука", value: "Наука" },
      ],
      value: "",
    };
  },
  methods: {
    CreatePost() {
      if (this.AuthTrue === true) {
        this.$store.dispatch("posts/CreatePost", {
          title: this.title,
          url: this.url,
          count: 0,
          newsText: this.newsText,
          authorUid: this.$store.getters["users/ReturnUid"],
          date: Date.now(),
          likes: { uid: true },
          category: this.value,
        });
        alert("Новость создана");
        this.$router.push("/");
        return;
      }
      alert("Регистрация - наше всё!");
      this.$router.push("/RegistrationForm");
      return;
    },
  },
  computed: {
    AuthTrue() {
      return this.$store.getters["users/isAuth"];
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
