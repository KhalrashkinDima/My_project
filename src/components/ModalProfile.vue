<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-contain text-center text-light align-items-center">
          <div class="h5">Здравствуй</div>
          <div class="m-2">
            {{$store.getters["users/ReturnName"]}}
          </div>
          <button class="btn btn-secondary col-12 mt-4" @click="$emit('close')">
            <router-link to="/MyPosts" class="text-light text-decoration-none"
              >Мои посты</router-link
            >
          </button>
          <button class="btn btn-secondary col-12 mt-4" @click="$emit('close')">
            <router-link to="/MyComments" class="text-light text-decoration-none"
              >Мои комментарии</router-link
            >
          </button>
          <button class="btn btn-secondary col-12 mt-4" @click="$emit('close')">Выйти</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ModalProfile",
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

.modal-contain {
  width: 300px;
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