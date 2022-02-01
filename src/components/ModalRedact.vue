<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-containe text-center text-light align-items-center">
          <div class="h5">Редактор поста</div>
          <my-input label="Заголовок поста" v-model="PostById.title" />
          <my-input label="Ссылка на картинку" v-model="PostById.url" />
          <div class="pt-2">Введите основной текст</div>
          <textarea
            class="form-control mt-3"
            name="main text"
            id="exampleFormControlTextarea1"
            rows="3"
            v-model="PostById.newsText"
            placeholder="Текст поста"
          ></textarea>
          <div class="d-flex justify-content-around">
          <button class="btn btn-primary mt-4" @click="PostRedacted">
            Сохранить изменения
          </button>
          <button class="btn btn-primary mt-4" @click="$emit('close')">
            Выйти без сохранений
          </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import MyInput from "./ui/MyInput.vue";
export default {
  props: {
    postRedact: Number,
  },
  components: { MyInput },
  name: "ModalRedact",
  computed: {
    PostById(postRedact) {
      const CurrentPost = this.$store.getters["posts/GetPostById"];
      return CurrentPost(this.postRedact);
    },
  },
};
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-containe {
  width: 500px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  background: #3f5062;
  border-radius: 50px;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>