<template>
  <div>
    <div class="container-fluid align-items-center">
      <div class="pt-2 pb-2">
        <h4 class="text-center">
          {{ ThisId.title }}
        </h4>
        <span>
          <img :src="ThisId.url" class="d-block adv_pic img-fluid" />
        </span>
        <div>
          {{ ThisId.newsText }}
        </div>
        Оценить новость
        <button @click="Dec" class="rate_button">
          <img src="@/components/img/dislike.png" class="rate_image" />
        </button>
        {{ ThisId.count }}
        <button @click="Inc" class="rate_button">
          <img src="@/components/img/like.png" class="rate_image" />
        </button>
      </div>
      <div class="text-center p-3">
        <button
          class="btn btn-secondary"
          @click="OpenModal"
          :id="ThisId.id"
          v-if="AdminTrue"
        >
          Редактировать пост
        </button>
      </div>
      <modal-redact
        v-if="moduleRedactShown"
        @close="CloseRedact"
        v-bind:postRedact="ThisId.id"
      />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import ModalRedact from "../components/ModalRedact.vue";
export default {
  components: { ModalRedact },
  data() {
    return {
      moduleRedactShown: false,
    };
  },
  computed: {
    ...mapGetters({
      GetPostById: "posts/GetPostById",
    }),
    ThisId() {
      return this.GetPostById(this.$route.params.id);
    },
    AdminTrue() {
      return this.$store.getters["users/isAdmin"];
    },
    AuthTrue() {
      return this.$store.getters["users/isAuth"];
    },
  },
  methods: {
    Inc() {
      if (this.AuthTrue !== true) {
        alert("Зарегистрируйтесь чтобы иметь возможность оценивать новости!");
        return null;
      }
      console.log(this.$route.params.id);
      this.$store.dispatch("posts/IncreaseCount", this.$route.params.id);
    },
    Dec() {
      if (this.AuthTrue !== true) {
        alert("Зарегистрируйтесь чтобы иметь возможность оценивать новости!");
        return null;
      }
      this.$store.dispatch("posts/DecreaseCount", this.$route.params.id);
    },
    CloseRedact() {
      this.moduleRedactShown = false;
    },
    OpenModal() {
      this.moduleRedactShown = true;
    },
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

